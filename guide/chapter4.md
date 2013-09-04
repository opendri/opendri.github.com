---
# core jekyll attributes. do not edit.
layout: guide
navgroup: guide
group: guidechapter
category: guide
pagetype: core

# chapter metadata
section: II. Practice

title: 4. Design
excerpt: "xx"
abstract: "Field Guide"

---
{% include JB/setup %}

# 4. Design

<div class="info-box image-right adapted width-200px">
	<h4>Phase Summary</h4>
	<ul>
	<li>Timeline: 1-6 months</li>
	<li>Costs: ??</li>
	</ul> 
</div>

By expanding the stock of available information about risk, OpenDRI helps its clients target their DRM investments in areas with the highest potential impact. The design of each engagement is highly specific to the client's context. As a result, the Design phase of OpenDRI starts by listening: reviewing the use cases, concerns, and hopes collected during the Scoping mission. The initial OpenDRI team co-develops a set of practical solutions for collecting and curating the right data for their analytical needs. It focuses on making these solutions immediately useful for the partners and scalable in the local context.

OpenDRI has amassed a set of solutions and is still expanding its repertoire. Other organizations are exploring their own approaches. This Design chapter summarizes an approach for today's methods, leaving room for expansion and rethinking in the future.

***

## Objectives

The core objective of OpenDRI is to build an ecosystem of educated users around a national data management system for disaster risk management. 

<div class="info-box image-right adapted width-200px">
<h4>Co-Design as a Core Value</h4>
<p>The World Bank has learned some hard lessons in the process of building an ecosystem for open risk data with its clients. After the earthquake in Haiti in 2010, the Bank built a data catalogue for the national mapping agency, instead of working within the agency to meet its immediate needs and gradually build a data catalogue that met its internal requirements. The first GeoNode failed: it had stale data and its technical infrastructure was not maintained</p>
<p>Implementation by a formal institution **on behalf of** a country is no where near as effective as co-designing and co-deployment **in partnership with** a host government and a larger network of DRM partners. Whenever conceivably possible, a slow process of designing and building the data catalogue and collating the data should be done with the client leading the process and formal partners creating the supporting structures. Haiti's national mapping agency just launched the new version of a data catalogue in GeoNode, co-designed with the Bank and is now being loaded with fresh data.</p>
</div>

Unlike many DRM practices, design in OpenDRI unfolds as iterative discovery. It starts with a problem of immediate import  to a *client's* challenge in disaster risk management. OpenDRI brings those who have direct and specific knowledge of the problem (including various constraints and realities around solutions) into relationship with those who interpret and write policy around data sharing in the country. In the process of exploring the challenge and potential solutions, the teams explore faster, cheaper, and simpler ways to collect data while altering the policy frameworks by which government pursues data sharing. In turn, this process opens new possibilities in the minds of the partners,leading to innovation and catalyzing a new cycle to design a novel approach.

An OpenDRI project will often include both a mix of bottom-up and top-down strategies. The former mobilizes champions and communities around the creation of tangible, practical projects that demonstrate what open data can do. The latter provides the policy guidance and political cover for open data to emerge in a government context. The design of each strategy OpenDRI engagement will generally pull together one or more tactics from a growing toolbox. Each is designed to feed into risk assessment; each requires that its work plan; and each requires the other.

The design for an OpenDRI engagement centers on four activities:

1. **Collating**. Collating, cleansing, and releasing fragmented datasets via one or more data catalogues, usually hosting on GeoNodes.
2. **Collecting** data about the exposure of the built environment to natural hazards, usually by developing and sustaining a network of government officials, private sector entities, and community-based organizations that are prepared to curate this data.
3. **Creating the policy framework** where these data can come together and building the community of practice around the data.
4. **Catalyzing** efforts around the use of the data for DRM as well as purposes unforeseen by the OpenDRI partners.

This guide is built around these four activities. This first draft will discuss approaches to each activity during each phase of OpenDRI. A second draft will explore structuring the chapters of the guide around the four activities, showing the phases of development inside each activity.

***

## 1. Collating Existing Data
Once the members of the Open Data Working Group have committed to releasing data, the hard work of obtaining the data begins. In countries like Nepal, data about the built environment is decades old and needs to be collected anew. Any data that does exist need to be put into formats that can be released via an open data platform. 

The bottom-up portion of the OpenDRI Design phase mobilizes the champions for open data and provides a framework for them to connect fragmented resources into a more comprehensive, integrated data ecosystem. Two tactics in this approach are data catalogues (usually with GeoNode) and community mapping (usually with OpenStreetMap). The design for each 

### Designing Data Catalogues
Gathering data from existing archives requires a strategy around aggregating and cataloguing those data. In general, the critical step in this strategy is to implement a data catalogue, which provides a place for all the newly-released data to reside. The design of this data catalogue requires close collaboration between OpenDRI's implementing partners and the Open Data Working Group. The design of the data catalogue is described in greater detail in the Methods section of the guide: [Data Catalogue](datacatalogue.html).

It is worth pulling out some critical points from the Methods section and discussing them here.

1. **Approach data collation as a political challenge, not a technology problem**. Aggregating data around the DRM cycle is only partly a technical problem. It is mostly a process of building support for the release of existing data and a commitment to collecting new data among a range of actors. The work is mostly about listening to the problems that ministries and partners are having around risk assessment/analysis, then seeking out the underlying problems. The data that ministries need to make decisions may be hidden behind fears about what the data describe (national security), the accuracy and age of the data (data quality), or a lack of knowledge of how to harness the data for decision making (capacity building in risk assessment). Regardless of rationale, partners will often want to know that they are not the first or only organization to release data.
2. **Focus on the DRM data, not all data**. OpenDRI cannot solve all data sharing problems in a society. It focuses on the issues around the DRM cycle and the datasets that support decision makers around risk assessment, mitigation, preparedness, response, recovery, and reconstruction. The collation of data should center on a) data necessary for solving the use case(s) of early adopters, and b) the data sets that ministries are already prepared to release (low-hanging fruit).
3. **Plan on Data Cleansing**. Data that arrives from ministries may not always be ready for release or appropriate for OpenDRI. The pilot phase will need to confront data munging/cleansing to make the information immediately useful to others.
4. **Keep it simple and practical**. The process of cataloguing data often means adding detailed metadata. Developing simple, practical standards that everyone can use consistently will work out better than complex standards that can only be catalogued by experts.

***

### 2. Collecting New Data
Aggregating data from existing sources rarely creates a usable repository about the current built environment. OpenDRI also develops a network of people who are prepared to collect and (importantly) use data about the exposure of their communities to natural hazards. This approach generally applies techniques from participatory/community mapping 
The [architecture of a community mapping initiative](communitymapping.html) is described in the Methods section of the Field Guide. The design issues here are abstracted from this more detailed method.

#### Designing Field Data Collection
Collecting data from field environments have special challenges, especially in countries where maps are poor and addresses are often a long narrative than a postal address in the traditional sense. The Design team will need to consider several questions to ensure that the project has a solid field data collection design:

* What data need to be collected to drive which specific analytical problem? 
* What other data could be collected alongside these data, without overburdening the system? 

The Design team should work with the cross support of risk assessment and DRM experts, comparing data models recommended by this design process with the models from previous OpenDRI engagements.

***

## 3. Creating the policy environment
Creating the environment where open data can take root is often best done by creating a neutral space where partner to the process can discuss concerns, explore policy options, and review the demonstrations of open data projects from OpenDRI's bottom-up strategy. This neutral space is usually embedded in an Open Data Working Group. It is also the space from which unexpected synergies emerge.

### Open Data Working Group
To address underlying issues that prevent data sharing, it is necessary to confront the technical, policy, and science questions together. GFDRR's experience points at the importance of establishing a working group around open data. Membership includes champions from various government ministries, international organizations, and community partners.

The goal of the work group including building consensus, addressing underlying issues of sharing, exploring solutions to technical problems preventing data sharing, exchanging stories and best practices, and resolving conflicts. Many problems may not be technical, but may center around licensing, revenues, laws, regulations, and policies. Removing these impediments to data sharing in DRM is only possible by creating consensus among those who need data and control the data.

A key step in the formation of the working group is to get members to commit to opening their data. It is this commitment that provides the necessary policy guidance and political cover for mid-level government officials to perform the practical actions by which data moves from a closed server to an open data catalogue.

It is also important to focus on specific use cases. Working Groups that work on policy questions in the abstract tend to get stuck on edge cases and, as a result, become risk averse. Groups that focus on practical use cases can assess the potential political liabilities around a specific scenario and find solutions that may be imperfect, but get the group started on sharing more data.

***

### 4. Catalyzing efforts around the use of the data
A critical moment in OpenDRI engagement occurs when new or newly available data gets transformed into an analytical product that tells a risk manager something surprising. It might be a map of which schools are likely going to be destroyed in an earthquake, with a second layer on map showing that the NDMA's response plan relies heavily on the schools that are most likely to collapse. Catalyzing the ecosystem of thinkers who can probe the data for these linkages and  correlations is more difficult that one might think.

Education systems may focus on conveying technical skills and testing competency around those skills. Government ministries may hire competent individuals who have passed these tests, and then place them in a promotion scheme where they are required to perform a task in a bureaucracy to a standard. When education and evaluation align with execution of a task, curiousity can get squeezed out. 

OpenDRI works to create an ecosystem where thinkers can probe the data and turn it into products that the design team will be unable to predict. OpenDRI directly invests in the development of software that catalyzes this type of risk thinking (see InaSAFE). OpenDRI also works with university professors, entrepreneurs, and non-profit leaders to foster linkages between curricula and the development of tools that harness high-resolution analysis of the built environment.

***

## Who
The design phase is a critical window when the donor and facilitator (e.g., GDDRR) can bring together the network of champions and skeptics into a space where they can explore opportunities and constraints, while also building a different vision for their future of DRM data management. The Design phase is also a process by which various international organizations (donors, development partners, and external experts) can come into alignment on their respective strategies and coordinate their respective projects. In some cases, projects can avoid duplicating data collections and reduce costs for all parties.

### Management Team

Management of the Design phase should ensure that key stakeholders are represented in the design of the OpenDRI engagement, including:

* Ministry or Agency responsible for disaster preparation and response
* National Mapping Agency and other agencies with interests in community mapping of the built environment
* Ministry or Agency responsible for natural hazards, meteorology, and land use planning

Management should also ensure that the following areas of expertise are included in creating the architecture for OpenDRI:

* **Open Data**: expertise in working with governments around open data, particularly around the politics, policies, and laws of the release of data around the DRM cycle.
* **OpenDRI Technologies**: expertise in the technical mechanisms of collecting, cleansing, and curating open data. This person will specialize in geographic data, including the OpenGeo GeoNode and ESRI GeoPortal.
* **Community Mapping**: expertise in the implementation of community mapping methods for the collection of exposure data.

### Academic Partners

<div class="info-box image-right adapted width-200px">
<h4>Academic Evaluations and the Authority of Community Mapping Data</h4>
<p>An important output from the pilot implementation of an OpenDRI community mapping initiative is an academic paper that assesses the accuracy of the geographic data. OpenDRI tries to have this work performed at a local university, so that the effort connects communities to local experts in GIS, provides jobs for GIS students/graduates, and obtains a local assessment of the quality of the data. A positive report from a respected local university conveys authority (and trust) on community mapping data which would be difficult or impossible to obtain through other means.</p>
</div>

OpenDRI efforts actively engage the partnership of a country's academic institutions. There are two reasons for this natural fit:

* **Students**. OpenDRI efforts greatly benefit from students in geomatics/geography/GIS who participate in the design, implementation, and evaluation of community mapping efforts (as well as open government risk data).
* **M&amp;E**. The evaluation of OpenDRI community mapping data is often best done by professors who can mobilize a research team to ground truth the data collected by volunteers and assess its accuracy in a formal academic paper. 

The Design Team should identify academic partners and configure an agreement with them around support to the collection and evaluation of community mapping data. This agreement will usually take the form of a grant to perform research around the OpenDRI effort that culminates in an evaluation of the pilot implementation.

***

# Outputs
The Design phase creates an architecture for sharing data. Its goal is to catalyze innovative thinking among the client ministries and development partners, while at the same time, implementing early versions of open-source software to jump=-start open data collection and collation.

For GFDRR, the Design phase creates two types of documents:

1. Concept Note: A consensus concept notes between host government/client, Regional DRM contacts, OpenDRI/GFDRR contacts, and partners to building the open data ecosystem. This note captures the use case and provides a narrative of how the project will collate and collect new data about risks, create the environment for those data to be open, and catalyze the use of that data by those who can change the game around disaster risk management in a country or region.

2. Terms of Reference. The ToRs are the contracts by which the Bank hires expert assistance. The Design team will need to craft ToRs for each individual or firm who will contribute to building the pilot. These ToRs will include:

	* Data Catalogue. GeoNode or other.
	* Community Mapping
	* Incubator/Innovation Lab
	* OpenDRI Consultant Lead
	* OpenDRI Technical Lead

<div class="info-box image-right adapted width-200px">
<h2>Fail early and often</h2>
<p>Change comes slowly. Often, the act of experimenting with something new leads to an initial failure. So long as a each failure leads to learning something new, and each subsequent failure is a *new* mistake, the act of experimenting is something to be fostered. In international development, this type of thinking is often penalized. In open data, the fear is not of <em>being in error</em>, but of <em>burying error</em>. Innovation requires risk, though it may be managed and taken with precautions.</p>
</div>
.

***


## Sri Lanka
In November 2012, GFDRR sent a consultant to Sri Lanka to scope a potential OpenDRI engagement, based on previous interest in open data expressed earlier in 2012. During a five-week (25 working days) mission to Colombo and Batticloa, the consultant met with ministries and organizations around DRM: Disaster Management Center, Metro Colombo Urban Development Project, Survey Department, Department of Census and Statistics, Nation Building Research Organisation, the Meteorological Office, Information and Communication Technology Agency, UNDP, and several universities and donors. 

<div class="info-box image-right adapted width-200px">
<h4>Vivien Deparday, Consultant, GFDRR</h4>
<ul>
<li>Education: </li>
<li>Experience: A seasoned OpenDRI specialist who had trained GeoNode in the Caribbean and had technical knowledge of OpenStreetMap.</li>
<li>Terms of Reference: provide link to ToR.</li>
</ul> 
</div>

### Use Case
He discovered a situation where use cases centered around data availability for impact assessment and rick communication. In many places, exposure data were not available or very outdated. Because Sri Lanka faces a wide range of natural hazards, he also found that data were fragmented among the ministries that specialize in various aspects of these threats. Ministries and development partners needed a mechanism to share data and to overcome a typical situation: while some officials were willing to share data, others were more reluctant, because their ministries had sold datasets to each other for some time; opening the data would disrupt those revenues. 

### Recommendations
The consultant worked with GFDRR on a set of recommendations that would enable a parallel bottom-up and top-down approach to data sharing. To build trust around community mapping and data catalogues, the project planned to provide trainings around OpenStreetMap and the GeoNode to build practical, concrete evidence around the effects of collecting and sharing data. To create policy-level support for a open-data strategy, the project would create an Open Disaster Data Advisory Committee. This committee would be charged with establishing guidelines, policies and standards to facilitate data sharing between the government agencies and opening those data to the public. It would be composed of the ministries involved in OpenDRI, plus several community and development partners. 

### Results
Sri Lanka's OpenDRI initiative is progressing rapidly, with pilots of the data catalogue and community mapping in both Colombo and Batticloa. The project will also be using InaSAFE as a risk communication tool.