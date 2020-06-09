---
id: design-systems
title: Our Design Systems
---

A design system is a series of components, patterns, and themes working together to provide a seamless end-user experience. By utilizing repeatable components and a set of standards guiding the usage of components, design systems allow companies to scale the practice of design.

Our product design organization currently supports two design systems for our clients, depending on their version of the Pega Platform — UI Kit and Cosmos.


UI Kit
Starting in 2013 as an initiative to improve consistency in business applications, the UI Kit is an available collection of product design resources. UI Kit was introduced as an optional sample UX for customers, as they could adapt any version of UI-Kit and choose to upgrade with each release.

Cosmos is the latest design system created by the Pega product design organization. Containing the most up-to-date documentation, the Cosmos components and patterns can be implemented as early as 8.3, via a preview release and running on traditional Pega UI. The UI Kit, the prior iteration of the system, is now considered a legacy product. Though UI Kit is still usable and documented until the foreseeable future, it will not be receiving continued design effort.


Cosmos Design System
The Cosmos Design System is a collection of product design resources evolving alongside the innovation of Pega technology.

Pega Comos' three design system themes
Specializing for three distinct experiences — low-code configuration for app builders, production apps for employees, and self-service for end-customers — the system simplifies the complexity of the multi-dimensional business into a visual language and streamlined workflow. These distinct experiences are known as themes: Cosmos Build, Cosmos Work and Cosmos Engage.

Supporting Pegasystem’s mission to change the way the world builds software, the Cosmos Design System is the only low-code design library that enables clients to configure experiences to align with their unique set of business problems.

When comparing both products, Cosmos Work is a replacement for UI Kit, as both are designed to improve the experiences of our client’s employees and focus on production applications. The UX experiences in each of these systems specifically improves efficiency, productivity, and accuracy, while reducing fatigue and the time needed to train employees — an enormous cost for our clients. The Cosmos Design System goes further than UI Kit to redesign all the experiences across all Pega touchpoints, including low-code development and customer experiences. At this time, Cosmos Work is available for use; additional themes will be published once available to the public.


Migrating Your Pega Application
Cosmos is currently available as a preview, running on traditional Pega UI technology; and as part of Pega’s project fnx, we are also creating a version of Cosmos in React.

Transitioning to React based Cosmos from the current UI is a managed migration and not an auto-upgrade. There will be a series of migration tools available that will assist in migration to Cosmos. Some of these are pointers that will require manual intervention and others will be automated procedures. Because our current technology will co-exist with the new technology for the foreseeable future, you choose when and how to transition your applications to the new Pega technology, thus enabling you to keep your business running while you transition.

One of these tools is available starting in 8.4 as an App Studio Compliance landing page. This landing page will highlight areas of your application UI that do not conform to the new best practices. These are best practices that are exposed through configuration capabilities in the App Studio.

Future migration guides will be published here and on Pega Community, as they are available. Until then, to prepare for this migration, we recommend engaging in a series of best-practice efforts today. The following recommendations are also highlighted by the App Studio Compliance landing page in 8.4:

Compliance with the Case Designer
Use the Case Designer to configure your case types to employ a seamless case and sub-case relationships. Use the App Studio Data Designer to manage data relationships.

Design Template Based UI
Cosmos takes full use of templating, as it is a completely templated system. Moving to design templates in your apps now will considerably aid in moving to Cosmos later. When you run automation tools to move your application to Cosmos UI, we can reflow your data to fit inside the same UI regions.

Data Pages
Cosmos on React will take full use of data pages. Moving to Data Pages will be necessary to take advantage of this rollout strategy. Take inventory of the data pages available in your application to prep your data for migration. List-based controls will also have to start using data pages for their list source.

Use of Custom HTML, Custom Controls and Custom Sections
Apps that were built in older releases of Pega still have many custom components built using jsp or other technologies. Those will not work within a React based UI. It is best to use out-of-the-box controls instead which will have out-of-the-box React equivalents.

LAST UPDATED: DEC 2019
