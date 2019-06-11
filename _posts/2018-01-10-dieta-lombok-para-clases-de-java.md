---
layout: post
title: Dieta Lombok para clases de Java
date: 2018-1-10 13:32:20 +0500
description: Las clases de Java pueden ser más sintéticas sin pérdida semántica, la creación de 'métodos de rutina' puede ser automatizada. # Add post description (optional)
#img: i-rest.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Java, Lombok]
---
Escribir una clase en Java, y específicamente en proyectos JavaEE, a veces puede ser tedioso pues JavaEE descansa sobre convenciones, ampliamente adoptadas en el mundo Java, para integrar parte de sus componentes.

Una de estas convenciones es la creación de métodos getters y setters por cada campo de la clase sobre el que se desee tener acceso de lectura y escritura. JSF Expression Language(JSF EL) utiliza la pauta para integrar CDI managed beans con los componentes de entrada y salida de datos de JSF.

De esta forma por cada campo de la clase es necesario crear dos métodos adicionales que no aportan a la lógica del negocio. Ésto sólamente teniendo en cuenta a los getters y setters, pero me he encontrado que muchas veces se hace necesaria una implementación de los métodos equals, toString y hashCode en cada clase, y las implementaciones no varían mucho de unas a otras.

Siguiendo esta lógica se puede deducir fácilmente que las clases con muchos campos quedan con una cantidad de código chatarra no despreciable; y aunque los IDEs modernos pueden generar este código, no es menos cierto que representa una incomodidad al trabajar y desluce la estética de las clases.

```java
public class Example{

   private List<Thing> things;
   
   public List<Thing> getThings(){
     ...
   }

   public void setThings(List<Thing> things){
     ...
   }

   @Override
   public boolean equals(Object o){
     ...
   }

   @Override
   public String toString(){
     ...
   }

   @Override
   public int hashCode(){
     ...
   }
}
```

## Lombok al rescate

El objetivo del Proyecto Lombok es precisamente ahorrarnos la escritura o generación de ese código chatarra. Ésto se logra mediante el uso de anotaciones con las cuales decoramos las clases y que Lombok utiliza para generar el bytecode correspondiente. Esta generación es no intrusiva, transparente al programador, no impacta el código fuente sino el compilado final.

Las anotaciones que más utilizo:
* @Getter y @Setter: Para la generación de los métodos getters y setters. Se puede utilizar sobre los campos o a nivel de clase.
* @ToString: Se utiliza a nivel de clase y genera una implementación donde, por omisión,se hace uso del nombre de la clase y de los campos que la componen.
* @EqualsAndHashCode: Se utiliza a nivel de clase para generar los métodos equals y hashCode.
* @Data: Es una anotación estereotipo para sintetizar el uso de las anotaciones: @ToString, @EqualsAndHashCode, @Getter, @Setter y @RequiredArgsConstructor.
* @Accessors: Permite la generación de un API más fluido para getters y setters.

Adicionalmente Lombok se integra muy bien con los IDEs Java más utilizados, de forma que no es necesario compilar todo el proyecto cada vez que se modifica una clase.

Para usar Lombok sólo tienes que poner la utilidad como una dependencia de compilación. En el caso que se utilice maven:

```xml
<dependency>

  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.16.18</version>
  <scope>provided</scope>

</dependency>
```
Entonces ya podríamos codificar:

```java
@Data
@Accessors
public class Example{

   private List<Thing> things;     
}
```

Esta versión de la clase Example es equivalente a la anterior.

Se debe tener cuidado al utilizar la configuración (chain=true) sobre la anotación @Accessors, pues la misma rompe con ciertas pautas de JSF EL y de JPA sobre la firma de los métodos getters y setters.

También se deben configurar correctamente las anotaciones al utilizarlas sobre entidades JPA que tengan relaciones de carga tardía (lazy load) pues podrían generar algún tipo de error al usarla fuera del contexto transaccional.

Con Lombok:
* Se disminuye en tiempos de desarrollo
* Las clases quedan más "limpias" en su código fuente
* El desarrollador se puede concentrar mejor en la lógica del negocio

Lombok es para las clases Java una dieta que recomiendo :)




