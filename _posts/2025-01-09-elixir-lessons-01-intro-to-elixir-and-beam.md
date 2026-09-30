---
layout: post
title: "Elixir Lessons: 01 - Introduction to Elixir and BEAM | Lecciones de Elixir: 01 - Introducción a Elixir y BEAM"
date: 2025-01-09
share-title: "Elixir Lessons 01: Introduction to Elixir and BEAM"
description: "Introduction to the Elixir programming language and the BEAM virtual machine | Introducción al lenguaje de programación Elixir y la máquina virtual BEAM"
tags: [Elixir, BEAM, Programación Funcional, Functional Programming, Erlang, Phoenix, OTP, Serie Elixir, Bilingual, Tutorial]
---

{% include bilingual_header.html %}

<!-- Spanish Content -->
<div class="lang-content hidden" id="lang-es" markdown="1">

Bienvenidos al primer artículo de la serie **Lecciones de Elixir**. Esta serie explorará el ecosistema Elixir, desde conceptos básicos del lenguaje hasta patrones avanzados de OTP y desarrollo con el framework Phoenix.

## 🎯 Resumen de la Serie

Esta es la **Lección 01** de una serie en la que trataré de cubrir una parte del ecosistema Elixir. Mi plan hasta el momento (podría cambiar en el futuro):

### 🧠 **Fundamentos del Lenguaje Elixir** (Lecciones 1-8)
- Introducción a Elixir y BEAM, tipos de datos, pattern matching, funciones y módulos, recursión, pipes, inmutabilidad, control de flujo

### 🔄 **Concurrencia y Procesos** (Lecciones 9-13)
- Procesos, supervisores, tasks, agentes, GenServer, OTP

### 💾 **Persistencia con Ecto** (Lecciones 14-20)
- Mix fundamentals, instalación, esquemas, CRUD, relaciones, consultas, changesets, transacciones

### 🌐 **Desarrollo Web con Phoenix** (Lecciones 21-28)
- Estructura, rutas, vistas, contextos, formularios, WebSockets, LiveView, seguridad

### ⚙️ **Testing y Buenas Prácticas** (Lecciones 29-31)
- ExUnit, mocks, cobertura

### 🚀 **Ash Framework** (Lecciones 32-37)
- Filosofía declarativa, recursos, APIs, authorization, integraciones

### 🌍 **Producción y DevOps** (Lecciones 38-42)
- Configuración, releases, telemetry, logging, despliegue

### 🧠 **Avanzado / Mastery** (Lecciones 43-47)
- Metaprogramación, DSLs, NIFs, optimización, arquitecturas distribuidas

### 📚 **Temas Transversales** (integrados desde el inicio)
- **IEx**: Comandos, debugging, ayuda (desde Lección 1)
- **Mix**: Gestión de proyectos, dependencias (desde Lección 14)
- **Documentación**: @moduledoc, @doc, doctests (desde Lección 1)

## ✨ ¿Qué es Elixir?

Elixir es un lenguaje de programación dinámico, funcional y concurrente diseñado para construir aplicaciones mantenibles y escalables. Creado por José Valim en 2011, Elixir aprovecha la probada Máquina Virtual de Erlang (BEAM) para proporcionar:

- **Tolerancia a fallos** a través de la filosofía "let it crash"
- **Concurrencia masiva** con procesos ligeros
- **Sistemas en tiempo real** con garantías de tiempo real suave
- **Capacidades de computación distribuida** desde el inicio
- **Intercambio de código en caliente** para despliegues sin tiempo de inactividad

### 🌟 Características Destacadas de Elixir

- **Funcional**: Las funciones son el centro del lenguaje, sin estado mutable
- **Concurrente**: Puedes crear miles de procesos ligeros para tareas concurrentes sin esfuerzo
- **Escalable**: Diseñado para manejar miles de usuarios o peticiones simultáneamente
- **Tolerante a fallos**: Gracias a la arquitectura "let it crash" y los supervisores
- **Productivo**: Con herramientas como `iex`, `mix`, y una sintaxis limpia, desarrollar en Elixir es muy agradable
- **Inmutable**: Todas las estructuras de datos son inmutables por defecto

## ⚙️ La Máquina Virtual BEAM

La BEAM (Bogdan/Björn's Erlang Abstract Machine) es la máquina virtual que ejecuta código Elixir. Fue diseñada originalmente para telecomunicaciones, donde la confiabilidad y el rendimiento eran críticos. Entender BEAM es crucial para los desarrolladores de Elixir porque:

### Características Clave de BEAM:

- **Modelo de Actores**: Todo funciona en procesos ligeros
- **Programación Preemptiva**: Los procesos no pueden monopolizar el planificador
- **Recolección de Basura por Proceso**: Previene pausas globales
- **Aislamiento de Fallos**: Los crashes de procesos no afectan a otros procesos
- **Distribución**: Soporte integrado para sistemas distribuidos

### ¿Por qué BEAM es Importante?

```elixir
# Ejemplo: Crear millones de procesos es trivial
for i <- 1..1_000_000 do
  spawn(fn ->
    receive do
      msg -> IO.puts("Proceso #{i} recibió: #{msg}")
    end
  end)
end
```

Gracias a BEAM:
- Los procesos son **aislados** y pueden fallar sin afectar a otros
- Hay **recolección de basura por proceso**, lo cual mejora la eficiencia
- Puedes tener **miles o millones de procesos concurrentes**

## 🏗️ Principios de Diseño de Elixir

### 1. Inmutabilidad
Todas las estructuras de datos en Elixir son inmutables por defecto:

```elixir
# Esto crea una nueva lista, no modifica la original
lista_original = [1, 2, 3]
nueva_lista = [0 | lista_original]
# lista_original sigue siendo [1, 2, 3]
```

### 2. Pattern Matching
El pattern matching es una de las características más poderosas de Elixir:

```elixir
# Ejemplos de pattern matching
{:ok, resultado} = {:ok, "éxito"}
[cabeza | cola] = [1, 2, 3, 4]
%{nombre: nombre, edad: edad} = %{nombre: "Juan", edad: 30}
```

### 3. Tolerancia a Fallos
La filosofía "let it crash" fomenta fallar rápido y recuperarse rápidamente:

```elixir
# El supervisor reiniciará este proceso si falla
defmodule MiTrabajador do
  use GenServer

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, name: __MODULE__)
  end

  def init(state) do
    {:ok, state}
  end

  # Si esto falla, el supervisor lo reiniciará
  def handle_call(:operacion_peligrosa, _from, state) do
    # Alguna operación riesgosa que podría fallar
    {:reply, :ok, state}
  end
end
```

## 🔍 Casos de Uso Donde Elixir y BEAM Brillan

### Perfecto para:
1. **Sistemas de chat y mensajería** (como WhatsApp): Muchos usuarios, mensajes en tiempo real
2. **APIs y microservicios**: Altamente concurrentes y escalables
3. **IoT y procesamiento de datos**: Manejando grandes flujos de eventos
4. **Plataformas de trading o juegos en tiempo real**: Baja latencia y concurrencia masiva
5. **Automatización industrial y telecomunicaciones**: Robustez y tolerancia a fallos
6. **Aplicaciones web** con el framework Phoenix
7. **Sistemas distribuidos**
8. **Sistemas financieros** que requieren tolerancia a fallos

### Adopción Industrial:
- **Discord**: Maneja millones de usuarios concurrentes
- **WhatsApp**: Construido sobre Erlang/OTP (base de Elixir)
- **Pinterest**: Usa Elixir para sistemas de notificaciones
- **Bleacher Report**: Actualizaciones deportivas en tiempo real
- **Lonely Planet**: Backend de plataforma de viajes

## 📚 Instalación de Elixir

### Instalación Recomendada con asdf

Se recomienda usar **asdf**, un gestor de versiones para muchos lenguajes:

```bash
# Instalar asdf (macOS con Homebrew)
brew install asdf

# Agregar plugins
asdf plugin-add erlang
asdf plugin-add elixir

# Instalar versiones compatibles
asdf install erlang 28.0.1
asdf install elixir 1.18.4-otp-28
asdf global erlang 28.0.1
asdf global elixir 1.18.4-otp-28
```

### Instalación Alternativa
```bash
# macOS con Homebrew
brew install elixir

# Ubuntu/Debian
sudo apt-get install elixir
```

## ✍️ Tu Primer Programa en Elixir

### Introducción a IEx (Interactive Elixir)

**IEx** es el shell interactivo de Elixir, una herramienta fundamental que usarás constantemente durante el desarrollo. Es tu mejor amigo para experimentar, probar código y debuggear.

#### Comandos Básicos de IEx:

1. **Abrir IEx**:
   ```bash
   iex
   ```
   Esto abrirá el REPL de Elixir (shell interactiva).

2. **Hola Mundo**:
   ```elixir
   IO.puts("Hola Mundo")
   ```

   Verás en pantalla:
   ```
   Hola Mundo
   :ok
   ```

3. **Comandos útiles de IEx**:
   ```elixir
   # Ver ayuda
   h()

   # Ayuda sobre una función específica
   h(IO.puts)

   # Ver información sobre un tipo
   i("hola")

   # Limpiar pantalla
   clear()

   # Recompilar código (útil para desarrollo)
   recompile()

   # Salir de IEx
   # Ctrl+C dos veces o System.halt()
   ```

4. **Variables y evaluación**:
   ```elixir
   # Las variables se asignan y evalúan inmediatamente
   nombre = "Elixir"
   edad = 14  # años desde 2011
   IO.puts("#{nombre} tiene #{edad} años")

   # El valor de la última expresión se muestra automáticamente
   5 + 3  # → 8
   ```

### Hola Mundo con Módulos

**Los módulos** organizan el código en Elixir. Desde el primer módulo, es importante documentar bien nuestro código:

```elixir
# hola_mundo.ex
defmodule HolaMundo do
  @moduledoc """
  Módulo que proporciona diferentes formas de saludar.

  Este es nuestro primer módulo en Elixir, diseñado para
  demostrar conceptos básicos de documentación y funciones.
  """

  @doc """
  Saluda de manera informal a una persona.

  ## Ejemplos

      iex> HolaMundo.saludar("Ana")
      "¡Hola, Ana!"

      iex> HolaMundo.saludar("Elixir")
      "¡Hola, Elixir!"
  """
  def saludar(nombre) do
    "¡Hola, #{nombre}!"
  end

  @doc """
  Saluda de manera formal usando nombre y apellido.

  ## Parámetros

    - nombre: String con el nombre de la persona
    - apellido: String con el apellido de la persona

  ## Ejemplos

      iex> HolaMundo.saludar_formal("Ana", "García")
      "Buenos días, Ana García"
  """
  def saludar_formal(nombre, apellido) do
    "Buenos días, #{nombre} #{apellido}"
  end
end
```

#### Cómo usar este módulo en IEx:

```elixir
# Compilar el archivo
c("hola_mundo.ex")

# Usar las funciones
HolaMundo.saludar("Elixir")
HolaMundo.saludar_formal("José", "Valim")

# Ver la documentación
h(HolaMundo)
h(HolaMundo.saludar)
```

#### Introducción a la Documentación en Elixir:

- **@moduledoc**: Documenta qué hace el módulo completo
- **@doc**: Documenta funciones específicas
- **Ejemplos con doctests**: Los ejemplos en la documentación también sirven como tests
- **Comando h()**: En IEx, puedes ver la documentación de cualquier módulo o función

## 📚 Conceptos Clave - Vista Previa

En próximos artículos, profundizaremos en:

### Pattern Matching y Guards
```elixir
defmodule Calculadora do
  def dividir(a, b) when b != 0 do
    {:ok, a / b}
  end

  def dividir(_, 0) do
    {:error, "División por cero"}
  end
end
```

### Comunicación entre Procesos
```elixir
# Modelo de actores en acción
pid = spawn(fn ->
  receive do
    {:sumar, a, b} -> IO.puts("Resultado: #{a + b}")
  end
end)

send(pid, {:sumar, 5, 3})
```

### Comportamientos OTP
```elixir
# Ejemplo de GenServer
defmodule Contador do
  use GenServer

  def start_link(valor_inicial) do
    GenServer.start_link(__MODULE__, valor_inicial)
  end

  def incrementar(pid) do
    GenServer.cast(pid, :incrementar)
  end

  def obtener_valor(pid) do
    GenServer.call(pid, :obtener_valor)
  end
end
```

## 🎯 ¿Qué Sigue?

En **Lección 02: Tipos de Datos Básicos** *(próximamente)*, exploraremos:
- Átomos, números, strings y binarios
- Listas, tuplas y mapas
- Booleanos y nil
- Estructuras de datos inmutables
- Operaciones básicas con cada tipo

## 💡 Ejercicios Prácticos

### 🤔 Preguntas Teóricas

1. **¿Qué es Elixir y sobre qué está construido?**
2. **¿Cuáles son algunas características clave de la BEAM?**
3. **Menciona tres situaciones donde Elixir es especialmente útil.**
4. **¿Qué significa la filosofía "let it crash"?**
5. **¿Por qué la inmutabilidad es importante en Elixir?**

### 💻 Ejercicios Prácticos

6. Abre `iex` y ejecuta una suma: `3 + 4` *(Básico)*
7. Muestra un mensaje con tu nombre usando `IO.puts` *(Básico)*
8. Usa `IO.inspect` para mostrar el resultado de `5 * 6` *(Básico)*
9. Ejecuta `System.version()` para ver la versión de Elixir *(Básico)*
10. Declara una variable `nombre` y asigna tu nombre *(Básico)*
11. Usa `String.upcase/1` para convertir tu nombre a mayúsculas *(Intermedio)*
12. Verifica si `:ok` es un átomo usando `is_atom(:ok)` *(Intermedio)*
13. Calcula el resultado de `10 / 2` y observa el tipo de dato *(Intermedio)*
14. Crea una lista con `[1, 2, 3]` y asígnala a una variable *(Intermedio)*
15. Usa `String.length/1` para obtener la longitud de tu nombre *(Intermedio)*
16. Crea un módulo simple con una función que sume dos números (incluye @moduledoc y @doc) *(Avanzado)*
17. Usa el comando `h()` para ver la ayuda de `String.upcase/1` *(Avanzado)*
18. Compila un archivo .ex en IEx usando `c/1` *(Avanzado)*
19. Usa `i/1` para inspeccionar el tipo de datos de diferentes valores *(Avanzado)*
20. Experimenta con recompile() en IEx *(Avanzado)*
21. Crea un módulo con doctests y comprueba que funcionan *(Avanzado)*
22. Usa pattern matching para extraer el primer elemento de una lista *(Avanzado)*
23. Experimenta con el operador pipe `|>` para encadenar operaciones *(Avanzado)*

### ✔️ Respuestas

**Teóricas:**
1. Elixir es un lenguaje funcional y concurrente que corre sobre la BEAM (máquina virtual de Erlang)
2. Concurrencia masiva, procesos aislados, recolección de basura por proceso, tolerancia a fallos
3. Aplicaciones de chat, microservicios, sistemas en tiempo real, IoT, plataformas financieras
4. Significa permitir que los procesos fallen y que sean reiniciados por supervisores, en lugar de intentar manejar todos los errores posibles
5. La inmutabilidad previene efectos secundarios, hace el código más predecible y facilita la concurrencia

**Prácticas:**
6. `3 + 4` → `7`
7. `IO.puts("Hola, soy Maykell")` → imprime "Hola, soy Maykell"
8. `IO.inspect(5 * 6)` → imprime `30`
9. `System.version()` → devuelve algo como `"1.18.4"`
10. `nombre = "Maykell"`

11. `String.upcase(nombre)` → `"MAYKELL"`
12. `is_atom(:ok)` → `true`
13. `10 / 2` → `5.0` (float)
14. `lista = [1, 2, 3]`
15. `String.length(nombre)` → `7`

16. ```elixir
    defmodule Calculadora do
      @moduledoc "Módulo para operaciones matemáticas básicas"

      @doc "Suma dos números"
      def sumar(a, b), do: a + b
    end
    ```
17. `h(String.upcase)` → muestra la documentación de la función
18. `c("archivo.ex")` → compila el archivo y carga el módulo
19. `i(42)` → muestra que es Integer, `i("hola")` → muestra que es String
20. `recompile()` → recompila todos los módulos modificados
21. Los doctests son los ejemplos en @doc que se pueden ejecutar como tests
22. `[primero | resto] = [1, 2, 3]` → `primero = 1`, `resto = [2, 3]`
23. `"hola" |> String.upcase() |> String.length()` → `4`

## 🎓 Desafío Final

Crea un módulo llamado `Saludo` que:
- Tenga una función `saludar/1` que reciba un nombre y devuelva un saludo
- Tenga una función `saludar_hora/2` que reciba un nombre y una hora, y devuelva un saludo apropiado
- Use pattern matching para manejar diferentes casos

```elixir
# Ejemplo de uso:
# Saludo.saludar("Ana") → "¡Hola, Ana!"
# Saludo.saludar_hora("Ana", :mañana) → "¡Buenos días, Ana!"
# Saludo.saludar_hora("Ana", :tarde) → "¡Buenas tardes, Ana!"
```

## 💭 Reflexiones Finales

Elixir representa un cambio de paradigma de la programación orientada a objetos tradicional hacia un enfoque funcional, concurrente y tolerante a fallos. La máquina virtual BEAM proporciona una base robusta que ha sido probada en sistemas de telecomunicaciones durante décadas.

Como alguien que ha trabajado con Java, Ruby y otros lenguajes durante más de 20 años, encuentro el enfoque de Elixir hacia la concurrencia y la tolerancia a fallos particularmente convincente para los sistemas distribuidos modernos.

---

## 🔗 Recursos Útiles

- [Sitio oficial de Elixir](https://elixir-lang.org/)
- [Elixir School en Español](https://elixirschool.com/es/)
- [Guía de instalación con asdf](https://asdf-vm.com/guide/getting-started.html)
- [Playground online (Livebook)](https://livebook.dev/)
- [Programming Elixir](https://pragprog.com/titles/elixir16/) por Dave Thomas
- [The Little Elixir & OTP Guidebook](https://www.manning.com/books/the-little-elixir-and-otp-guidebook)

*Esta es la Parte 1 de la serie Lecciones de Elixir. Síguenos mientras exploramos el fascinante mundo de la programación funcional y el ecosistema BEAM.*

**Próximo Artículo**: Lecciones de Elixir: 02 - Tipos de Datos Básicos

---

*¿Qué aspectos de Elixir te emociona más aprender? ¡Comparte tus pensamientos en los comentarios!*

</div>

<!-- English Content -->
<div class="lang-content" id="lang-en" markdown="1">

Welcome to the first article in the **Elixir Lessons** series! This comprehensive series will explore the Elixir ecosystem, from basic language concepts to advanced OTP patterns and Phoenix framework development.

## 🎯 Series Overview

This is **Lesson 01** of a series where I'll try to cover part of the Elixir ecosystem. My plan so far (may change in the future):

### 🧠 **Elixir Language Fundamentals** (Lessons 1-8)
- Introduction to Elixir and BEAM, data types, pattern matching, functions and modules, recursion, pipes, immutability, control flow

### 🔄 **Concurrency and Processes** (Lessons 9-13)
- Processes, supervisors, tasks, agents, GenServer, OTP

### 💾 **Persistence with Ecto** (Lessons 14-20)
- Mix fundamentals, installation, schemas, CRUD, relationships, queries, changesets, transactions

### 🌐 **Web Development with Phoenix** (Lessons 21-28)
- Structure, routes, views, contexts, forms, WebSockets, LiveView, security

### ⚙️ **Testing and Best Practices** (Lessons 29-31)
- ExUnit, mocks, coverage

### 🚀 **Ash Framework** (Lessons 32-37)
- Declarative philosophy, resources, APIs, authorization, integrations

### 🌍 **Production and DevOps** (Lessons 38-42)
- Configuration, releases, telemetry, logging, deployment

### 🧠 **Advanced / Mastery** (Lessons 43-47)
- Metaprogramming, DSLs, NIFs, performance optimization, distributed architectures

### 📚 **Cross-cutting Topics** (integrated from the beginning)
- **IEx**: Commands, debugging, help (from Lesson 1)
- **Mix**: Project management, dependencies (from Lesson 14)
- **Documentation**: @moduledoc, @doc, doctests (from Lesson 1)

## ✨ What is Elixir?

Elixir is a dynamic, functional, and concurrent programming language designed for building maintainable and scalable applications. Created by José Valim in 2011, Elixir leverages the proven Erlang Virtual Machine (BEAM) to provide:

- **Fault tolerance** through the "let it crash" philosophy
- **Massive concurrency** with lightweight processes
- **Real-time systems** with soft real-time guarantees
- **Distributed computing** capabilities from the start
- **Hot code swapping** for zero-downtime deployments

### 🌟 Elixir's Key Features

- **Functional**: Functions are at the center of the language, with no mutable state
- **Concurrent**: You can create thousands of lightweight processes for concurrent tasks effortlessly
- **Scalable**: Designed to handle thousands of users or requests simultaneously
- **Fault-tolerant**: Thanks to the "let it crash" architecture and supervisors
- **Productive**: With tools like `iex`, `mix`, and clean syntax, developing in Elixir is very pleasant
- **Immutable**: All data structures are immutable by default

## ⚙️ The BEAM Virtual Machine

The BEAM (Bogdan/Björn's Erlang Abstract Machine) is the virtual machine that runs Elixir code. It was originally designed for telecommunications, where reliability and performance were critical. Understanding BEAM is crucial for Elixir developers because:

### Key BEAM Features:

- **Actor Model**: Everything runs in lightweight processes
- **Preemptive Scheduling**: Processes can't monopolize the scheduler
- **Per-Process Garbage Collection**: Prevents global pauses
- **Fault Isolation**: Process crashes don't affect other processes
- **Distribution**: Built-in support for distributed systems

### Why BEAM Matters:

```elixir
# Example: Creating millions of processes is trivial
for i <- 1..1_000_000 do
  spawn(fn ->
    receive do
      msg -> IO.puts("Process #{i} received: #{msg}")
    end
  end)
end
```

Thanks to BEAM:
- Processes are **isolated** and can fail without affecting others
- There's **per-process garbage collection**, which improves efficiency
- You can have **thousands or millions of concurrent processes**

## 🏗️ Elixir's Design Principles

### 1. Immutability
All data structures in Elixir are immutable by default:

```elixir
# This creates a new list, doesn't modify the original
original_list = [1, 2, 3]
new_list = [0 | original_list]
# original_list is still [1, 2, 3]
```

### 2. Pattern Matching
Pattern matching is one of Elixir's most powerful features:

```elixir
# Pattern matching examples
{:ok, result} = {:ok, "success"}
[head | tail] = [1, 2, 3, 4]
%{name: name, age: age} = %{name: "John", age: 30}
```

### 3. Fault Tolerance
The "let it crash" philosophy encourages failing fast and recovering quickly:

```elixir
# Supervisor will restart this process if it crashes
defmodule MyWorker do
  use GenServer

  def start_link(opts) do
    GenServer.start_link(__MODULE__, opts, name: __MODULE__)
  end

  def init(state) do
    {:ok, state}
  end

  # If this crashes, supervisor will restart it
  def handle_call(:dangerous_operation, _from, state) do
    # Some risky operation that might fail
    {:reply, :ok, state}
  end
end
```

## 🔍 Use Cases Where Elixir and BEAM Shine

### Perfect for:
1. **Chat and messaging systems** (like WhatsApp): Many users, real-time messages
2. **APIs and microservices**: Highly concurrent and scalable
3. **IoT and data processing**: Handling large event streams
4. **Trading platforms or real-time games**: Low latency and massive concurrency
5. **Industrial automation and telecommunications**: Robustness and fault tolerance
6. **Web applications** with Phoenix framework
7. **Distributed systems**
8. **Financial systems** requiring fault tolerance

### Industry Adoption:
- **Discord**: Handles millions of concurrent users
- **WhatsApp**: Built on Erlang/OTP (Elixir's foundation)
- **Pinterest**: Uses Elixir for notification systems
- **Bleacher Report**: Real-time sports updates
- **Lonely Planet**: Travel platform backend

## 📚 Installing Elixir

### Recommended Installation with asdf

It's recommended to use **asdf**, a version manager for many languages:

```bash
# Install asdf (macOS with Homebrew)
brew install asdf

# Add plugins
asdf plugin-add erlang
asdf plugin-add elixir

# Install compatible versions
asdf install erlang 28.0.1
asdf install elixir 1.18.4-otp-28
asdf global erlang 28.0.1
asdf global elixir 1.18.4-otp-28
```

### Alternative Installation
```bash
# macOS with Homebrew
brew install elixir

# Ubuntu/Debian
sudo apt-get install elixir
```

## ✍️ Your First Elixir Program

### Introduction to IEx (Interactive Elixir)

**IEx** is Elixir's interactive shell, a fundamental tool you'll use constantly during development. It's your best friend for experimenting, testing code, and debugging.

#### Basic IEx Commands:

1. **Open IEx**:
   ```bash
   iex
   ```
   This will open the Elixir REPL (interactive shell).

2. **Hello World**:
   ```elixir
   IO.puts("Hello World")
   ```

   You'll see on screen:
   ```
   Hello World
   :ok
   ```

3. **Useful IEx commands**:
   ```elixir
   # See help
   h()

   # Help about a specific function
   h(IO.puts)

   # See information about a type
   i("hello")

   # Clear screen
   clear()

   # Recompile code (useful for development)
   recompile()

   # Exit IEx
   # Ctrl+C twice or System.halt()
   ```

4. **Variables and evaluation**:
   ```elixir
   # Variables are assigned and evaluated immediately
   name = "Elixir"
   age = 14  # years since 2011
   IO.puts("#{name} is #{age} years old")

   # The value of the last expression is shown automatically
   5 + 3  # → 8
   ```

### Hello World with Modules

**Modules** organize code in Elixir. From the first module, it's important to document our code well:

```elixir
# hello_world.ex
defmodule HelloWorld do
  @moduledoc """
  Module that provides different ways to greet.

  This is our first module in Elixir, designed to
  demonstrate basic documentation and function concepts.
  """

  @doc """
  Greets a person informally.

  ## Examples

      iex> HelloWorld.greet("Ana")
      "Hello, Ana!"

      iex> HelloWorld.greet("Elixir")
      "Hello, Elixir!"
  """
  def greet(name) do
    "Hello, #{name}!"
  end

  @doc """
  Greets formally using first and last name.

  ## Parameters

    - first_name: String with the person's first name
    - last_name: String with the person's last name

  ## Examples

      iex> HelloWorld.greet_formal("Ana", "García")
      "Good morning, Ana García"
  """
  def greet_formal(first_name, last_name) do
    "Good morning, #{first_name} #{last_name}"
  end
end
```

#### How to use this module in IEx:

```elixir
# Compile the file
c("hello_world.ex")

# Use the functions
HelloWorld.greet("Elixir")
HelloWorld.greet_formal("José", "Valim")

# See the documentation
h(HelloWorld)
h(HelloWorld.greet)
```

#### Introduction to Documentation in Elixir:

- **@moduledoc**: Documents what the entire module does
- **@doc**: Documents specific functions
- **Examples with doctests**: Examples in documentation also serve as tests
- **h() command**: In IEx, you can see documentation for any module or function

## 📚 Key Concepts - Preview

In upcoming articles, we'll dive deep into:

### Pattern Matching and Guards
```elixir
defmodule Calculator do
  def divide(a, b) when b != 0 do
    {:ok, a / b}
  end

  def divide(_, 0) do
    {:error, "Division by zero"}
  end
end
```

### Process Communication
```elixir
# Actor model in action
pid = spawn(fn ->
  receive do
    {:add, a, b} -> IO.puts("Result: #{a + b}")
  end
end)

send(pid, {:add, 5, 3})
```

### OTP Behaviors
```elixir
# GenServer example
defmodule Counter do
  use GenServer

  def start_link(initial_value) do
    GenServer.start_link(__MODULE__, initial_value)
  end

  def increment(pid) do
    GenServer.cast(pid, :increment)
  end

  def get_value(pid) do
    GenServer.call(pid, :get_value)
  end
end
```

## 🎯 What's Next?

In **Lesson 02: Basic Data Types** *(coming soon)*, we'll explore:
- Atoms, numbers, strings, and binaries
- Lists, tuples, and maps
- Booleans and nil
- Immutable data structures
- Basic operations with each type

## 💡 Practical Exercises

### 🤔 Theoretical Questions

1. **What is Elixir and what is it built on?**
2. **What are some key characteristics of BEAM?**
3. **Mention three situations where Elixir is especially useful.**
4. **What does the "let it crash" philosophy mean?**
5. **Why is immutability important in Elixir?**

### 💻 Practical Exercises

6. Open `iex` and execute an addition: `3 + 4` *(Basic)*
7. Show a message with your name using `IO.puts` *(Basic)*
8. Use `IO.inspect` to show the result of `5 * 6` *(Basic)*
9. Execute `System.version()` to see the Elixir version *(Basic)*
10. Declare a variable `name` and assign your name *(Basic)*
11. Use `String.upcase/1` to convert your name to uppercase *(Intermediate)*
12. Check if `:ok` is an atom using `is_atom(:ok)` *(Intermediate)*
13. Calculate the result of `10 / 2` and observe the data type *(Intermediate)*
14. Create a list with `[1, 2, 3]` and assign it to a variable *(Intermediate)*
15. Use `String.length/1` to get the length of your name *(Intermediate)*
16. Create a simple module with a function that adds two numbers (include @moduledoc and @doc) *(Advanced)*
17. Use the `h()` command to see help for `String.upcase/1` *(Advanced)*
18. Compile a .ex file in IEx using `c/1` *(Advanced)*
19. Use `i/1` to inspect the data type of different values *(Advanced)*
20. Experiment with recompile() in IEx *(Advanced)*
21. Create a module with doctests and verify they work *(Advanced)*
22. Use pattern matching to extract the first element of a list *(Advanced)*
23. Experiment with the pipe operator `|>` to chain operations *(Advanced)*

### ✔️ Answers

**Theoretical:**
1. Elixir is a functional and concurrent language that runs on BEAM (Erlang virtual machine)
2. Massive concurrency, isolated processes, per-process garbage collection, fault tolerance
3. Chat applications, microservices, real-time systems, IoT, financial platforms
4. It means allowing processes to fail and be restarted by supervisors, instead of trying to handle all possible errors
5. Immutability prevents side effects, makes code more predictable, and facilitates concurrency

**Practical:**
6. `3 + 4` → `7`
7. `IO.puts("Hello, I'm Maykell")` → prints "Hello, I'm Maykell"
8. `IO.inspect(5 * 6)` → prints `30`
9. `System.version()` → returns something like `"1.18.4"`
10. `name = "Maykell"`

11. `String.upcase(name)` → `"MAYKELL"`
12. `is_atom(:ok)` → `true`
13. `10 / 2` → `5.0` (float)
14. `list = [1, 2, 3]`
15. `String.length(name)` → `7`

16. ```elixir
    defmodule Calculator do
      @moduledoc "Module for basic mathematical operations"

      @doc "Adds two numbers"
      def add(a, b), do: a + b
    end
    ```
17. `h(String.upcase)` → shows the function documentation
18. `c("file.ex")` → compiles the file and loads the module
19. `i(42)` → shows it's Integer, `i("hello")` → shows it's String
20. `recompile()` → recompiles all modified modules
21. Doctests are the examples in @doc that can be run as tests
22. `[first | rest] = [1, 2, 3]` → `first = 1`, `rest = [2, 3]`
23. `"hello" |> String.upcase() |> String.length()` → `5`

## 🎓 Final Challenge

Create a module called `Greeting` that:
- Has a `greet/1` function that receives a name and returns a greeting
- Has a `greet_time/2` function that receives a name and time, and returns an appropriate greeting
- Uses pattern matching to handle different cases

```elixir
# Usage example:
# Greeting.greet("Ana") → "Hello, Ana!"
# Greeting.greet_time("Ana", :morning) → "Good morning, Ana!"
# Greeting.greet_time("Ana", :evening) → "Good evening, Ana!"
```

## 💭 Final Thoughts

Elixir represents a paradigm shift from traditional object-oriented programming to a functional, concurrent, and fault-tolerant approach. The BEAM virtual machine provides a robust foundation that has been battle-tested in telecommunications systems for decades.

As someone who has worked with Java, Ruby, and other languages for over 20 years, I find Elixir's approach to concurrency and fault tolerance particularly compelling for modern distributed systems.

---

## 🔗 Useful Resources

- [Official Elixir Website](https://elixir-lang.org/)
- [Elixir School](https://elixirschool.com/)
- [asdf installation guide](https://asdf-vm.com/guide/getting-started.html)
- [Online playground (Livebook)](https://livebook.dev/)
- [Programming Elixir](https://pragprog.com/titles/elixir16/) by Dave Thomas
- [The Little Elixir & OTP Guidebook](https://www.manning.com/books/the-little-elixir-and-otp-guidebook)

*This is Part 1 of the Elixir Lessons series. Follow along as we explore the fascinating world of functional programming and the BEAM ecosystem.*

**Next Article**: Elixir Lessons: 02 - Basic Data Types

---

*What aspects of Elixir are you most excited to learn about? Share your thoughts in the comments below!*

</div>

<!-- Language Switching CSS and JavaScript -->
<style>
.language-selector {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}

.lang-btn {
  background: none;
  border: none;
  padding: 12px 24px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.lang-btn:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.lang-btn.active {
  background-color: #007acc;
  color: white;
  border-color: #007acc;
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
}

.lang-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive design */
@media (max-width: 768px) {
  .language-selector {
    flex-direction: column;
    align-items: center;
  }

  .lang-btn {
    margin: 5px 0;
    width: 200px;
  }
}

/* Better code block styling for bilingual content */
.lang-content pre {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
}

.lang-content code {
  background-color: #f1f3f4;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.lang-content blockquote {
  border-left: 4px solid #007acc;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: #666;
}
</style>

<script>
function switchLanguage(lang) {
  // Hide all content
  document.querySelectorAll('.lang-content').forEach(el => {
    el.style.display = 'none';
  });

  // Remove active class from all buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected language
  document.getElementById('lang-' + lang).style.display = 'block';
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

  // Remember user preference
  localStorage.setItem('elixir-lessons-preferred-language', lang);

  // Update URL hash without scrolling
  if (history.replaceState) {
    history.replaceState(null, null, '#lang-' + lang);
  }
}

// Auto-select user's preferred language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check URL hash first
  const urlLang = window.location.hash.replace('#lang-', '');
  const validLangs = ['es', 'en'];

  let preferredLang = 'es'; // default

  if (validLangs.includes(urlLang)) {
    preferredLang = urlLang;
  } else {
    // Check localStorage
    const storedLang = localStorage.getItem('elixir-lessons-preferred-language');
    if (validLangs.includes(storedLang)) {
      preferredLang = storedLang;
    }
  }

  switchLanguage(preferredLang);
});

// Handle browser back/forward
window.addEventListener('hashchange', function() {
  const urlLang = window.location.hash.replace('#lang-', '');
  const validLangs = ['es', 'en'];

  if (validLangs.includes(urlLang)) {
    switchLanguage(urlLang);
  }
});
</script>