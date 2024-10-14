---
layout: post
title: El patrón de diseño DCI
date: 2017-10-20
description: # Add post description (optional)
#img: i-rest.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Java, DCI, Patrón de diseño, design pattern]
---

__DCI__ ha devenido en uno de los patrones que siempre tengo a mano para usar cuando programo. Complementario con __MVC__ y no tan afamado como éste, he podido encontrar en su aplicación una forma estándar y simple de organizar los artefactos en la implementación de lógicas de negocio complejas.

### Patrón de diseño

Datos, Contexto e Interacción(DCI) es un patrón de diseño utilizado en el desarrollo de sistemas complejos para aportar mecanismos simples, bien definidos, robustos y uniformes en la organización, implementación e invocación de la lógica de negocio.

Entre sus objetivos están:
* Simplificar la implementación de la lógica de negocio y sus dependencias de ejecución mediante la creación de contextos.
* Estandarizar la implementación de la lógica de negocio mediante el uso de convenciones simples.
* Facilitar el cambio de la lógica de negocio del sistema de manera ágil mediante el bajo acoplamiento del código.
* Mejorar la comprensión del flujo del sistema mediante el otorgamiento de un status de primera clase a la lógica de negocio.

### Explicación de DCI

DCI conceptualiza la implementación de la lógica de negocio en tres partes:

* Datos: son todos los datos necesarios para la implementación de la lógica de negocio.
* Contexto: es la agrupación de los datos y asignación de roles a los mismos. La asignación de roles se explica en que un dato puede ser interpretado en contextos diferentes de diferentes formas. Por ejemplo: suponiendo un sistema de gestión de salud, los datos de una persona pueden estar en rol de Paciente en un contexto de aplicación de un tratamiento médico, o en rol de Acompañante en el contexto de ciudados de otro paciente. El contexto define un dominio autocontenido y sensible a validación para la ejecución de la lógica de negocio.
* Interacción: es la implementación de la lógica de negocio. Para ello hace uso del contexto válido pues en él están todos los datos y roles suficientes.

DCI se puede ver como una aplicación del Principio de Responsabilidad Única a la implementación de la lógica de negocio de un sistema.

### Un tín de historia

DCI fue inventado por Trygve Reenskaug y James O. Coplien, científicos de la computación. Trygve Reenkaug también es el autor del patrón de diseño MVC.

MVC y DCI son patrones complementarios, pues se centran en partes diferentes del funcionamiento de los sistemas. El dominio de aplicación de MVC comprende la interacción de los usuarios con la interfaz de la aplicación/sistema: información a mostrar, procesamiento de eventos de la interfaz de usuario, recepción y respuesta a peticiones, etc.

El dominio de aplicación de DCI es la ejecución de la lógica de negocio, por lo cual MVC se puede apoyar en DCI para dar respuesta a la petición de un usuario.

Es común ver la implementación de lógica de negocio en los Controladores del patrón MVC, lo cual es factible para operaciones triviales en sistemas no complejos con lógica de aplicación que raramente cambia. Pero cuando los sistemas comienzan a crecer, no aplicar DCI conlleva a una creciente complejidad de los controladores, mayor acoplamiento de código, mayor dificultad en la detección/corrección de errores y pérdida de agilidad para responder a los cambios en la lógica de negocio.

### Una posible implementación del patrón de diseño DCI para entornos Java EE

Esta implementación consta de tres artefactos:

* Interfaz Contexto: define el comportamiento de un contexto básicamente como una entidad sensibles a ser validada. Las clases que implementen esta interfaz deben adicionar los diferentes roles que serán utilizados en sus contextos específicos y dar una definición de cuándo es válido el contexto, a través de la implementación del método:
~~~java
public boolean esValido();
~~~
* Clase abstracta __InteraccionBasica__: define cómo se ejecuta cualquier lógica de negocio de una interacción a través del método ejecutar() que en ningún caso debe ser redefinido en clases hijas. El método no ha sido declarado como _final_ pues no permitiría usar CDI como vía de implementación de las interacciones.
~~~java
public abstract class InteraccionBasica implements Serializable {

    private static final long serialVersionUID = 1L;

    public Object ejecutar() throws ContextoNoValido, Exception {

        if (!getContexto().esValido()) throw new ContextoNoValido(getContexto().toString());

        Object o = ejecucionDeLaLogicaDeNegocio();

        return o;
    }

    protected abstract Object ejecucionDeLaLogicaDeNegocio();

    public abstract Contexto getContexto();
}
~~~
* Excepción __ContextoNoValido__: Es lanzada en la ejecución de una interacción si al invocar el método `esValido()` del contexto relacionado con la interacción se devuelve _false_.

Adicionalmente cualquier interacción que extienda de `InteraccionBasica` debe proveer implementaciones concretas para los métodos `ejecucionDeLaLogicaDeNegocio` y `getContexto`. En el método `ejecucionDeLaLogicaDeNegocio` es donde deben centrarse los esfuerzos del desarrollador por brindar una implementación adecuada de la misma.

### Uso

A continuación se considera el caso de uso de búsqueda de una persona dado su id.
~~~java
public class ContextoBusquedaDePersonaPorId implements Contexto, Serializable { 

    private static final long serialVersionUID = 1L;

    private EntityManager em; 

    private BigDecimal id; 

    @Override 
    public boolean esValido() { 
        return getEm() != null && getId() != null; 
    } 
    // getters y setters no incluidos
}
~~~

De notar:
* El contexto `ContextoBusquedaDePersonaPorId` implementa las interfaces `Contexto` y `Serializable`.
* Se definen los datos y roles que necesita el contexto, ej: `em` es un `EntityManager` que referencia a una fuente de Datos.
* Se brinda una implementación del método `esValido` acorde al contexto. En este caso el contexto es válido cuando los campos `id` y `em` no son null.

La interacción `InteraccionBusquedaDePersonaPorId`:

~~~java
@Model 
public class InteraccionBusquedaDePersonaPorId extends InteraccionBasica { 

    private static final long serialVersionUID = 4591028478174556531L;

    private final ContextoBusquedaDePersonaPorId contexto = new ContextoBusquedaDePersonaPorId(); 

    @Override
    public Contexto getContexto() { return contexto; } 

    @Override
    protected Object ejecucionDeLaLogicaDeNegocio() {  

        // Implementación de la lógica de negocio

        return _resultado;
    }
}
~~~

De notar:
* La anotación `@Model` indica que estamos en presencia de un __CDI__ bean el cual podrá ser inyectado como dependencia utilizando el nombre `interaccionBusquedaDePersonaPorId`. La dependencia tiene un ámbito de `Request`.
* La interacción extiende la clase `InteraccionBasica`.
* Se declara e instancia el contexto asociado a la interacción. Con la instanciación se asegura que no es nulo, evitando chequeos innecesarios.
* Se define el método `getContexto`.
* Se define el método `ejecucionDeLaLogicaDeNegocio` donde se implementa la lógica de negocio en concreto.

El uso del contexto y la interacción se hace a través de un __EJB__ que brinda un contexto de ejecución transaccional a la lógica de negocio así como un punto de entrada estándar para su uso.

La interfaz del EJB define el comportamiento del mismo. Como pauta se debe definir un método `ejecutar` con parámetros en dependencia del caso de uso. Estos parámetros son los datos utilizados en el contexto.

~~~java
public interface ServIntBusquedaDePersonaPorId {

    public Object ejecutar(BigDecimal id) throws ContextoNoValido, OptimisticLockException, Exception; 
}
~~~

Implementación de la interfaz:

~~~java
@Stateless 
public class ServImpBusquedaDePersonaPorId implements ServIntBusquedaDePersonaPorId, Serializable{

    private static final long serialVersionUID = 1L;

    @PersistenceContext
    transient private EntityManager em; 

    @Inject
    transient private InteraccionBusquedaDePersonaPorId interaccion; 

    @Override
    public Object ejecutar(BigDecimal id) throws ContextoNoValido, OptimisticLockException, Exception {

        ContextoBusquedaDePersonaPorId ctx = (ContextoBusquedaDePersonaPorId)interaccion.getContexto();

        ctx.setEm(em);
        ctx.setId(id);

        return interaccion.ejecutar();
  }
}
~~~

De notar:
* Se inyecta el recurso EntityManager que va a ser utilizado en el contexto.
* Se inyecta el CDI bean de la interacción.
* Se setean los datos relevantes al contexto y se devuelve el resultado de la ejecución de la interacción.

Una vez implementados los artefactos, se puede utilizar el servicio en el controlador CDI bean inyectando el EJB e invocando el método ejecutar:

~~~java
@Named
public class PersonaDatos implements Serializable {
  
    @EJB
    private ServIntBusquedaDePersonaPorId busquedaDePersonaPorId; 

    public void buscar(BigDecimal id) {

        if (id != null) {
            try {
                Persona _p = (Persona) busquedaDePersonaPorId.ejecutar(id); 
            } catch (Exception _e) {_e.printStackTrace();}
        }
    }

}
~~~

### Palabras finales

La utilización del patrón de diseño DCI me ha facilitado la programación de lógica de negocio compleja y ha hecho mi código más fácil de comprender por otras personas. Como ocurre con frecuencia, no es una bala de plata, su aplicación en casos de lógica simple no es necesaria pues al menos hay que implementar un contexto y una interacción por cada caso de uso.

Si has tenido experiencias haciendo uso del patrón y quisieras compartirlas quedo atento :)
