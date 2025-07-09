# TODO: Serie "Lecciones de Elixir"

> **Archivo de seguimiento para las 50 lecciones de la serie Elixir**
> 
> **Reglas importantes:**
> - Siempre introducir las mejores prácticas
> - Siempre poner ejercicios teóricos y al menos 10 ejercicios prácticos sobre los temas tratados en la lección
> - Siempre las respuestas estarán al final
> - Siempre se debe incluir una sección de referencias, con enlaces relevantes
> - Las lecciones deben ser simples, directas y legibles. Los ejemplos deben ser reales

---

## 📊 Progreso General

**Total de Lecciones**: 47 (se reorganizaron temas transversales)
**Completadas**: 1
**En Progreso**: 0
**Pendientes**: 46
**Progreso**: 2% (1/47)

**📝 Cambios en la organización:**
- IEx se integró en Lección 01 (transversal desde el inicio)
- Mix se integrará cuando se necesite por primera vez
- Documentación (@moduledoc, @doc) se integró en Lección 01 (transversal desde primer módulo)

---

## 🧠 Fundamentos del Lenguaje Elixir (Lecciones 1-8)

### ✅ Lección 01: Introducción a Elixir y la BEAM
- **Estado**: ✅ COMPLETADA
- **Fecha**: 2025-01-09
- **Archivo**: `2025-01-09-elixir-lessons-01-intro-to-elixir-and-beam.md`
- **Objetivos**: Introducir Elixir, BEAM, casos de uso, instalación, IEx, documentación básica
- **Ejercicios**: 18 ejercicios (5 teóricos + 13 prácticos)
- **Temas cubiertos**: 
  - ✅ Qué es Elixir y características
  - ✅ BEAM VM y su importancia
  - ✅ Casos de uso industriales
  - ✅ Instalación (asdf recomendado)
  - ✅ **IEx**: comandos básicos, ayuda, inspección, compilación
  - ✅ Primer programa y módulos
  - ✅ **Documentación**: @moduledoc, @doc, doctests
  - ✅ Pattern matching básico
  - ✅ Operador pipe introducción
- **Notas**: Incluye temas transversales (IEx, documentación) que se usarán en todas las lecciones

### ⏳ Lección 02: Tipos de datos básicos
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Átomos, números, strings, binarios, listas, tuplas, mapas, booleanos, nil
- **Ejercicios**: Pendiente (5 teóricos + 10 prácticos mínimo)
- **Temas a cubrir**: 
  - [ ] Átomos y su uso
  - [ ] Números (enteros, flotantes)
  - [ ] Strings y binarios
  - [ ] Listas y operaciones
  - [ ] Tuplas y cuándo usarlas
  - [ ] Mapas y keywords
  - [ ] Booleanos y nil
  - [ ] Conversiones entre tipos
- **Referencias necesarias**: Documentación oficial de tipos básicos

### ⏳ Lección 03: Pattern Matching
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Fundamentos de pattern matching, casos avanzados
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Conceptos básicos de pattern matching
  - [ ] Match operator (=)
  - [ ] Destructuring de estructuras de datos
  - [ ] Pin operator (^)
  - [ ] Pattern matching en funciones
  - [ ] Casos avanzados

### ⏳ Lección 04: Funciones y módulos
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Definición de funciones, módulos, scope
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Definición de funciones
  - [ ] Aridad y sobrecarga
  - [ ] Funciones privadas
  - [ ] Módulos y organización
  - [ ] Importación y alias
  - [ ] Atributos de módulo

### ⏳ Lección 05: Recursión y tail recursion
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Recursión, optimización tail call
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Conceptos de recursión
  - [ ] Casos base y recursivos
  - [ ] Tail recursion
  - [ ] Optimización de memoria
  - [ ] Ejemplos prácticos

### ⏳ Lección 06: Pipes (|>) y composición
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Operador pipe, composición de funciones
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Operador pipe |>
  - [ ] Composición de funciones
  - [ ] Legibilidad del código
  - [ ] Casos de uso prácticos
  - [ ] Comparación con nested calls

### ⏳ Lección 07: Inmutabilidad y funciones puras
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Inmutabilidad, funciones puras, efectos secundarios
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Concepto de inmutabilidad
  - [ ] Funciones puras vs impuras
  - [ ] Efectos secundarios
  - [ ] Beneficios de la inmutabilidad
  - [ ] Structural sharing

### ⏳ Lección 08: Guard clauses y control de flujo (cond, case, with, if)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Guards, estructuras de control
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Guard clauses
  - [ ] Expresión case
  - [ ] Expresión cond
  - [ ] Expresión with
  - [ ] Expresión if/unless
  - [ ] Cuándo usar cada una

---

## 🔄 Concurrencia y Procesos (Lecciones 9-13)

### ⏳ Lección 09: Procesos (spawn, send, receive)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Procesos ligeros, comunicación entre procesos
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Modelo de actores
  - [ ] spawn/1 y spawn/3
  - [ ] send/2 y receive
  - [ ] Process.alive?
  - [ ] Mailboxes y message passing
  - [ ] Linking y monitoring

### ⏳ Lección 10: Supervisores y árboles de supervisión
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Supervisión, fault tolerance
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] Concepto de supervisión
  - [ ] Supervisor behaviour
  - [ ] Estrategias de supervisión
  - [ ] Árboles de supervisión
  - [ ] Child specifications
  - [ ] Restart strategies

### ⏳ Lección 11: Tasks y agentes
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Task module, Agent para estado
- **Ejercicios**: Pendiente

### ⏳ Lección 12: GenServer
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: GenServer behaviour, state management
- **Ejercicios**: Pendiente

### ⏳ Lección 13: OTP (Open Telecom Platform)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Principios OTP, behaviours
- **Ejercicios**: Pendiente

---

## 💾 Persistencia con Ecto (Lecciones 14-20)

### ⏳ Lección 14: Ecto - Instalación y configuración (+ Mix fundamentals)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Introducir Mix (transversal), setup Ecto, configuración database
- **Ejercicios**: Pendiente
- **Temas a cubrir**:
  - [ ] **Mix fundamentals**: new, deps, compile, test, run
  - [ ] mix.exs y configuración del proyecto
  - [ ] Dependencias y Hex.pm
  - [ ] Ecto installation y setup
  - [ ] Database configuration
- **Notas**: Primera lección que requiere Mix, se introduce como herramienta transversal

### ⏳ Lección 18: Ecto - Esquemas y migraciones
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Schema definition, migrations
- **Ejercicios**: Pendiente

### ⏳ Lección 19: Ecto - CRUD con Repo
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Create, Read, Update, Delete
- **Ejercicios**: Pendiente

### ⏳ Lección 20: Ecto - Relaciones
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Associations, has_many, belongs_to
- **Ejercicios**: Pendiente

### ⏳ Lección 21: Ecto - Consultas con Ecto.Query
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Query building, from, select, where
- **Ejercicios**: Pendiente

### ⏳ Lección 22: Ecto - Changesets y validaciones
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Data validation, error handling
- **Ejercicios**: Pendiente

### ⏳ Lección 23: Ecto - Ecto.Multi y transacciones
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Transacciones, operaciones múltiples
- **Ejercicios**: Pendiente

---

## 🌐 Desarrollo Web con Phoenix (Lecciones 24-31)

### ⏳ Lección 24: Phoenix - Estructura del proyecto Phoenix
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Project structure, conventions
- **Ejercicios**: Pendiente

### ⏳ Lección 25: Phoenix - Rutas, controladores y vistas
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Router, controllers, views
- **Ejercicios**: Pendiente

### ⏳ Lección 26: Phoenix - Templates y componentes
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: EEx templates, components
- **Ejercicios**: Pendiente

### ⏳ Lección 27: Phoenix - Contextos
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Context pattern, business logic
- **Ejercicios**: Pendiente

### ⏳ Lección 28: Phoenix - Formularios y changiosets
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Forms, validation
- **Ejercicios**: Pendiente

### ⏳ Lección 29: Phoenix - Canales y WebSockets
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Real-time communication
- **Ejercicios**: Pendiente

### ⏳ Lección 30: Phoenix - Phoenix LiveView
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Interactive UIs, real-time updates
- **Ejercicios**: Pendiente

### ⏳ Lección 31: Phoenix - Seguridad (CSRF, autenticación)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Security best practices
- **Ejercicios**: Pendiente

---

## ⚙️ Testing y Buenas Prácticas (Lecciones 32-34)

### ⏳ Lección 32: Testing - ExUnit y doctests
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Unit testing, doctests
- **Ejercicios**: Pendiente

### ⏳ Lección 33: Testing - Mocks y testing de concurrencia
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Mocking, concurrent testing
- **Ejercicios**: Pendiente

### ⏳ Lección 34: Testing - Cobertura de pruebas
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Test coverage, metrics
- **Ejercicios**: Pendiente

---

## 🚀 Ash Framework (Lecciones 35-40)

### ⏳ Lección 35: Ash Framework - Filosofía declarativa
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Declarative approach, concepts
- **Ejercicios**: Pendiente

### ⏳ Lección 36: Ash Framework - Recursos (Ash.Resource)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Resource definition
- **Ejercicios**: Pendiente

### ⏳ Lección 37: Ash Framework - APIs (Ash.Api)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: API creation
- **Ejercicios**: Pendiente

### ⏳ Lección 38: Ash Framework - Authorization y policies
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Authorization patterns
- **Ejercicios**: Pendiente

### ⏳ Lección 39: Ash Framework - Actions y relaciones
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Actions, relationships
- **Ejercicios**: Pendiente

### ⏳ Lección 40: Ash Framework - Integraciones con JSON:API y GraphQL
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: API integrations
- **Ejercicios**: Pendiente

---

## 🌍 Producción y DevOps (Lecciones 41-45)

### ⏳ Lección 41: DevOps - Configuración y manejo de secrets
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Configuration, secrets management
- **Ejercicios**: Pendiente

### ⏳ Lección 42: DevOps - Releases (mix release)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Production releases
- **Ejercicios**: Pendiente

### ⏳ Lección 43: DevOps - Telemetry y métricas
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Monitoring, metrics
- **Ejercicios**: Pendiente

### ⏳ Lección 44: DevOps - Logging estructurado
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Structured logging
- **Ejercicios**: Pendiente

### ⏳ Lección 45: DevOps - Despliegue (Fly.io, Gigalixir, Docker)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Deployment strategies
- **Ejercicios**: Pendiente

---

## 🧠 Avanzado / Mastery (Lecciones 46-50)

### ⏳ Lección 46: Avanzado - Metaprogramación (quote, unquote)
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Macros, metaprogramming
- **Ejercicios**: Pendiente

### ⏳ Lección 47: Avanzado - DSLs en Elixir
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Domain Specific Languages
- **Ejercicios**: Pendiente

### ⏳ Lección 48: Avanzado - NIFs y C bindings
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Native Implemented Functions
- **Ejercicios**: Pendiente

### ⏳ Lección 49: Avanzado - Optimización de rendimiento
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Performance tuning
- **Ejercicios**: Pendiente

### ⏳ Lección 50: Avanzado - Arquitecturas distribuidas con Elixir
- **Estado**: ⏳ PENDIENTE
- **Objetivos**: Distributed systems
- **Ejercicios**: Pendiente

---

## 📝 Notas para Próximas Lecciones

### Estructura Estándar de Cada Lección:
1. **Introducción y objetivos**
2. **Conceptos teóricos con ejemplos**
3. **Ejemplos prácticos progresivos**
4. **Mejores prácticas**
5. **Ejercicios teóricos** (mínimo 5)
6. **Ejercicios prácticos** (mínimo 10)
7. **Respuestas completas**
8. **Referencias y enlaces**
9. **Preview de la próxima lección**

### Convenciones de Archivos:
- **Formato**: `YYYY-MM-DD-elixir-lessons-XX-tema-de-la-leccion.md`
- **Tags**: `[Elixir, tema-específico, Serie Elixir]`
- **Ubicación**: `_posts/`

### Enlaces Útiles para Referencia:
- [Documentación Oficial Elixir](https://elixir-lang.org/docs.html)
- [Elixir School](https://elixirschool.com/es/)
- [Hex.pm](https://hex.pm/)
- [Phoenix Framework](https://phoenixframework.org/)
- [Ecto Documentation](https://hexdocs.pm/ecto/)

---

**Última actualización**: 2025-01-09
**Próxima lección a desarrollar**: Lección 02 - Tipos de datos básicos