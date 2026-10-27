---
title: "Construyendo Familly: El viaje de un Product Builder con IA y sin menús complejos"
description: "Por qué decidí crear un asistente familiar proactivo basado en voz y texto, y cómo este blog servirá para contar los retos de arquitectura, decisiones y experimentos semanales."
pubDate: 2026-10-27
author: "Stefano Merino"
lang: "es"
tags: ["build-in-public", "ai", "mvp", "voice-first"]
alternateSlug: "01-building-familly"
---

Vivimos rodeados de aplicaciones para organizarnos, pero la carga mental del hogar sigue intacta. 

Si tienes familia, sabes exactamente de qué hablo: citas del pediatra anotadas en una servilleta, entrenamientos de fútbol que se solapan con una reunión de trabajo, recordatorios de medicación que se pierden en grupos de WhatsApp, y calendarios compartidos que nadie actualiza porque abrir una app, navegar entre pantallas y rellenar siete campos de un formulario es agotador.

La tecnología no debería añadir más fricción a nuestras vidas. Debería funcionar como lo haría una persona atenta de la familia: alguien a quien le dices las cosas de pasada y se encarga de que todo cuadre.

Por eso nace **Familly**.

---

## La premisa: Cero menús complejos y sentido común humano

Desde el primer día, me marqué una regla no negociable: **cero formularios infinitos y cero menús laberínticos**. 

La interfaz central de Familly no es una tabla de Notion ni un panel de control con 20 botones. Es una presencia viva: una esfera dinámica que escucha cuando hablas o lees cuando escribes.

1. **Voz y texto conversacional:** Hablas de forma natural. *"El martes a las 18:00 tengo dentista con la peque"* o *"Recuérdame comprar leche cuando salga del trabajo"*.
2. **Sincronización real con Google Calendar:** Familly no inventa un calendario cerrado. Se conecta bidireccionalmente a los calendarios que tu familia ya usa en su día a día.
3. **Avisos proactivos con criterio humano:** Un vuelo requiere aviso la tarde anterior para hacer la maleta y 3 horas antes para salir al aeropuerto. Una cita médica necesita un aviso temprano por la mañana y otro 45 minutos antes. Familly calcula estos momentos sin que tengas que programar cinco alarmas manuales.
4. **Memoria abierta y evolutiva:** La vida familiar no cabe en categorías fijas. Las situaciones temporales (una mudanza, un proceso de entrevistas, una lesión) se siguen con cariño y, cuando se resuelven, se archivan como antecedente histórico sin borrarse de la memoria.

---

## Por qué este blog (Build in Public)

Como Product Builder, creo que el software más interesante se forja compartiendo el camino real: los errores de diseño, las optimizaciones de latencia con modelos de lenguaje, los debates sobre privacidad de datos en el hogar y cómo equilibrar sencillez técnica con una experiencia mágica.

En este espacio encontrarás:

- **Retos técnicos reales:** Cómo reducimos los tiempos de respuesta del LLM a menos de 1.5 segundos con presupuestos de razonamiento cero y cascadas inteligentes.
- **Diseño de producto e interfaz:** El paso a paso para construir una experiencia de voz fluida en la web (Web Speech API, Web Push, SSE) sin dependencias pesadas ni frameworks monolíticos.
- **Aprendizajes semanales:** Métricas del beta privado, feedback de familias reales y experimentos que funcionaron (y los que tuvimos que descartar).

Si quieres acompañarme en esta travesía o probar las primeras versiones de Familly antes que nadie, puedes apuntarte a la lista de espera en la web principal.

Nos vemos en el próximo episodio del viaje.

