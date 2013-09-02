---
# core jekyll attributes. do not edit.
layout: guide
navgroup: guide
group: guidechapter
category: guide

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
	<li>Costs: ?</li>
	</ul> 
</div>

By expanding the stock of available information about risk, OpenDRI helps its clients target their DRM investments in areas with the highest potential impact. The architecture for this work is highly specific to the client's context. As a result, the Design phase of OpenDRI starts by listening: reviewing the use cases, concerns, and hopes collected during the Scoping mission. The initial OpenDRI team co-develops a set of practical solutions for collecting and curating the right data for their analytical needs. OpenDRI has amassed a set of solutions and is still expanding its repertoire. Other organizations are exploring their own approaches. This Design chapter summarizes an approach for today's methods, leaving room for expansion and rethinking in the future.

***

## Objectives

A core objective of OpenDRI is to build an ecosystem of educated users around a national data management system for disaster risk management. The design for an OpenDRI engagement centers on four activities:

1. Collating, cleansing, and releasing fragmented datasets via one or more data catalogues, usually hosting on GeoNodes.
2. Collecting data about the exposure of the built environment to natural hazards, usually by developing and sustaining a network of government officials, private sector entities, and community-based organizations that are prepared to curate this data.
3. Creating the policy/legal environment where these data can come together and building the community of practice around the data.
4. Catalyzing efforts around the use of the data for DRM as well as purposes unforeseen by the OpenDRI partners.

<div class="info-box image-right adapted width-200px">
<h4>Co-Design as a Core Value</h4>
<p>The World Bank has learned some hard lessons in the process of building an ecosystem for open risk data with its clients. Implementation by a formal institution **on behalf of** a country is no where near as effective as co-designing and co-deployment **in partnership with** a host government and a larger network of DRM partners. Whenever conceivably possible, a slow process of designing and building the data catalogue and collating the data should be done with the client leading the process, and formal partners creating the supporting structures. </p>
</div>

Unlike many DRM practices, design in OpenDRI unfolds as iterative discovery. OpenDRI tends to bring those who have direct and specific knowledge of the constraints and realities into relationship with those who interpret and write policy. In the process, the teams explore faster, cheaper, and simpler ways to collect data while altering the frameworks by which government pursues data sharing. In turn, this process opens new possibilities in the minds of the partners,leading to innovation and catalyzing a new cycle to design a novel approach.

An OpenDRI project will often include both a mix of bottom-up and top-down strategies. The former mobilizes champions and communities around the creation of tangible, practical projects that demonstrate what open data can do. The latter provides the policy guidance and political cover for open data to emerge in a government context. The design of each strategy OpenDRI engagement will generally pull together one or more tactics from a growing toolbox. Each is designed to feed into risk assessment; each requires that its work plan; and each requires the other.

***

## 1. Collating Existing Data
Once the members of the Open Data Working Group have committed to releasing data, the hard work of obtaining the data begins. In many countries, data about the built environment is decades old and needs to be collected anew. Data that does exist needs to be put into forms that can be released to an open data platform.

The bottom-up portion of the OpenDRI Design phase mobilizes the champions for open data and provides a framework for them to connect fragmented resources into a more comprehensive, integrated data ecosystem. Two tactics in this approach are data catalogues (usually with GeoNode) and community mapping (usually with OpenStreetMap).

### Designing Data Catalogues
Gathering data from existing archives requires a strategy around aggregating and cataloguing those data. In general, the critical step in this strategy is to implement a data catalogue, which provides a place for all the newly-released data to reside. The design of this data catalogue requires close collaboration between OpenDRI's implementing partners and the Open Data Working Group. The design of the data catalogue is described in greater detail in the Methods section of the guide: [Data Catalogue](datacatalogue.html).

#### Map out the data aggregation challenges
Aggregating data around the DRM cycle is only partly a technical problem. It is mostly a process of building support for the release of existing data and a commitment to collecting new data among a range of actors. The work is mostly about listening to the problems that ministries and partners are having around risk assessment/analysis, then seeking out the underlying problems. The data that ministries need to make decisions may be hidden behind fears about what the data describe (national security), the accuracy and age of the data (data quality), or a lack of knowledge of how to harness the data for decision making (capacity building in risk assessment). Regardless of rationale, partners will often want to know that they are not the first or only organization to release data.

That said, OpenDRI cannot solve all data sharing problems. It focuses on the issues around the DRM cycle and the datasets that support decision makers around risk assessment, mitigation, preparedness, response, recovery, and reconstruction. The collation of data should center on a) data necessary for solving the use case(s) of early adopters, and b) the data sets that ministries are already prepared to release (low-hanging fruit). 

#### Define the Use Case with Early Adopters
Based on the scoping mission, the team will have a map of the champions, allies, skeptics, and gatekeepers for data related to the DRM cycle. It is the early adopters who will function as champions. In general, they will have a set of problems that can only be solved by aggregating data. The scoping team should map out these use cases and decide with which ones which will likely form the core of the initial pilot. (It is important to remember that government officials tend to need to see use cases for data before they release it). 

#### Data Catalogue Co-Design
The design of a data catalogue architecture generally begins with a choice: using existing government systems (often proprietary) versus implementing new open systems. This choice needs to be made in conjunction with the client based on several factors:

1. **Client Infrastructure**. If the host government has made major investments in building a spatial data infrastructure that uses a proprietary solution, it will likely wish to use OpenDRI as a method of driving additional open data into that infrastructure. If the client has a fragmented ecosystem with several different platforms (or different versions fo the same software), a free and open source solution may be ideal. 

2. **Compatibility with Web Services**. The basic principles of open data require that the complete dataset be available a public Internet address in an open data format using an open web services protocol (e.g., WMS, WFS, etc). If the current implementation of a spatial data infrastructure does not support web services, it would be prudent to work with the client on construction a set of tools that enable open data. More recent versions of ESRI software generally support web services, but the specific version in use will matter.

3. **Extent of Partnerships**. Data that deal with hazards, exposure, vulnerabilities, and risks may be spread over a large number of organizations that are inside and outside of government. They may all be centralized in a handful of ministries. The design of the data catalogue will be heavily influenced by the magnitude of the data aggregation/collation problem.

<div class="info-box image-right adapted width-200px">
<h4>Resources</h4>
<ul>
<li>[Worldbank LAC | AusAID | AIFDR InaSAFE Guides](http://worldbank.org)</li>
<li>[US Open Data Policy Implementation Guide ](http://project-open-data.github.io/schema/)</li>
<li>[US Open Data Policy Metadata Schema ](http://project-open-data.github.io/schema/)</li>
</ul>
</div>

#### Plan for Data Cleansing

Data that arrives from ministries may not always be ready for release or appropriate for OpenDRI:

* **Open data can be old data**. It may be released from archives where its currency is low and risk to the ministry for its release is low.
* **Data may not have the right schema for DRM analysis**. To analyze how a range of structures in a given area will react to a hazard, an analyst requires data that feed into specific aspects of a model. Data collated from ministries may not have these fields, and they may need to be collected afresh.
* **Data may need cleansing**. Data is often collected in ways that prevent its use in analysis. Location information may cram all geographical data into a single column in a database, so that GPS coordinates are mixed with postal addresses or even long-winded descriptions. Quantitative models need to have information in specific formats.
* **Geographic data may be in another projection**. There are many ways to turn the three-dimensional surface of the earth into a flat, two-dimensional map. These various methods are called *projections*. Some geographic data may have been collected using a projection different from the ones used in modern web services architectures. OpenDRI has discovered data in old projections that were customized to specific countries and are incompatible with modern projects, or a colossal drain on staff time to convert to projections that are compatible with open data.

To cleanse the data, it is often necessary to contract a Data Curator, whose is to prepare data for release and make its metadata available in the data catalogue. The design of the OpenDRI engagement needs to include this work. It also needs to guard against a danger inherent in hiring a data curator: focusing on making small datasets perfect that the expense of getting as much data possible available to the community of users.

***

### 2. Collecting New Data
Aggregating data from existing sources rarely creates a usable repository about the current built environment. OpenDRI also develops a network of people who are prepared to collect and (importantly) use data about the exposure of their communities to natural hazards. This approach generally applies techniques from participatory/community mapping and requires bringing together several entities:

* A community mapping partner
* A local government sponsor
* Community mapping trainers

The [architecture of a community mapping initiative](communitymapping.html) is described in the Methods section of the Field Guide.

#### Local Government Sponsor and CoMapping
In most cases, the government will drive the mapping effort, defining standards and reviewing content for community mapping. In several countries, it has also been critical to develop a technique that has become known as comapping. An OpenStreetMap or community mapper partners with a local government official to review data collected from the field on a map. The local government official then comaps with the mapper to add attributes to the data and correct inaccuracies in the polygons. Because of his or her authority in the local ecosystem, the local government official can sign off on the accuracy of the mapping, lending far greater authority to the data than would be possible with OpenStreetMap/community mapping work alone. The most common comappers are managers of small local governments (wards, villages, etc), GIS officers, and local officials in land use and disaster management. They each bring a set of relationships that are critical to success of community mapping. They bring the authority to speak with building owners, school and hospital officials, and other individuals who can provide first-hand information about the building stock and construction techniques. 

The design team should ask:

* Is there a local government sponsor who is willing to engage in comapping with the effort to collect data about the built environment?
* Is that local government sponsor willing to lend their authority to the community mapping effort?
* In the country context, what will be necessary to enlist the support of that local government sponsor? Will a request need to be sent from a provincial-level official to the locality? Or will the local leader need to recruited through local relationships?
 
#### Community mapping trainers
The techniques of *participatory mapping* have been developing over the past 20+ years. That said, the OpenStreetMap community has transformed old notions of participatory mapping by creating a central database for geographic data centered around shared open standards. Previously disparate efforts with varied techniques (and accuracy) have gradually coalesced into a relatively uniform practices. 

However, collecting data that accurately describes the built environment is a highly specialized niche within the OpenStreetMap and participatory mapping domain. OpenDRI has pioneered a set of techniques around field data collection, data models, and initial analysis that require the Design team to think beyond traditional participatory mapping efforts. Most OpenStreetMap data collections capture attributes about buildings and infrastructure found on maps used for navigation. OpenDRI collects data about the construction of buildings, sometimes in databases that run parallel to OpenStreetMap. 

Because of the specialized techniques around tagging buildings with structural analysis and collection of data into parallel databases, the Design team should include a community mapping trainer with prior OpenDRI experience in the plans for training a local community in the techniques of collecting data about exposure. Where no such community organization exists, the Design team should consider hiring the trainer as the host of an innovation lab or incubator (described below).

#### Finding the Incubator/Logistics Company
A tactic that has helped both existing community organizations and outside mapping trainers is an incubator/innovation lab. This shared space acts as an accelerator: an organization rents portions of its physical space to entities that need conference rooms, Internet access, phones, and storage space. Incubators enable community mappers to host meetings, help with the purchase and maintenance of equipment, and provide a space where they can allow volunteers to engage in the hard work of turning field data surveys into maps. The incubator can be thought of as a logistics partner to OpenDRI: it facilitates the effort, providing critical services that otherwise would fall on the OpenDRI management. 

The Design Team should look for a logistics partner who can run the incubator. Typical criteria for selection include:

* **Physical Space**: Provision of a physical space appropriate to the scale and scope of the community mapping effort. This space should have reliable electricity and Internet access, as well as meeting spaces and work spaces. Locked storage for GPS and computing equipment is also important.
* **Services**: the entity should be able to host meetings, draw together a larger network of technologists, and create synergies between mappers and the local technology communities. They are a relationship broker, with a deep network of contacts in the communities in which OpenDRI works.

### Designing Field Data Collection
Collecting data from field environments have special challenges, especially in countries where maps are poor and addresses are often a long narrative than a postal address in the traditional sense. The Design team will need to consider several questions to ensure that the project has a solid field data collection design:

* What data need to be collected to drive which specific analytical problem? 
* What other data could be collected alongside these data, without overburdening the system? 

The Design team should work with the cross support of risk assessment and DRM experts, comparing data models recommended by this design process with the models from previous OpenDRI engagements.

#### Imagery
A key component of field data collection is the availability of fresh satellite imagery. Imagery should be of a vintage that it reflects the current built environment. It should also be of 1m resolution or better, so that mappers can identify structures and use the imagery to trace building polygons. Coarser resolutions make it difficult to identify individual buildings in dense urban environments and reduce the accuracy of the maps.

#### Data Model
Each country will require its own data model to reflect its architectural traditions, construction methods, and mix of natural hazards. That said, there are many common elements between OpenDRI data models for field surveys. The Design team should ensure that the project is using standard methods, customized to context.

#### Method of Collection: Electronic or Paper
Where possible, the Design team should plan for the collection of data on smart phones and tablets. This method greatly reduces lost time and accuracy from the use of traditional paper surveys. That said, in many places where electricity and Internet is unreliable, paper is the preferred method. The Design team should consult with the OpenDRI specialist to decide which approach will be most viable for the country context.

***

## 3. Creating the policy/legal environment
Creating the policy environment where open data can take root is often best done by creating a neutral space where partner to the process can discuss concerns, explore policy options, and review the demonstrations of open data projects from OpenDRI's bottom-up strategy. This neutral space is usually embedded in an Open Data Working Group.

### Open Data Working Group
To address underlying issues that prevent data sharing, it is necessary to confront the technical, policy, and science questions together. GFDRR's experience points at the importance of establishing a working group around open data. Membership includes champions from various government ministries, international organizations, and community partners.

The goal of the work group including building consensus, addressing underlying issues of sharing, exploring solutions to technical problems preventing data sharing, exchanging stories and best practices, and resolving conflicts. Many problems may not be technical, but may center around licensing, revenues, laws, regulations, and policies. Removing these impediments to data sharing in DRM is only possible by creating consensus among those who need data and control the data.

A key step in the formation of the working group is to get members to commit to opening their data. It is this commitment that provides the necessary policy guidance and political cover for mid-level government officials to perform the practical actions by which data moves from a closed server to an open data catalogue.

It is also important to focus on specific use cases. Working Groups that work on policy questions in the abstract tend to get stuck on edge cases and, as a result, become risk averse. Groups that focus on practical use cases can assess the potential political liabilities around a specific scenario and find solutions that may be imperfect, but get the group started on sharing more data.

***
### 4. Catalyzing efforts around the use of the data

We need to develop this section around programs like InaSAFE.

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

## Concept Note
Consensus concept notes between host government/client, Regional DRM contacts, OpenDRI/GFDRR contacts, and partners to building the open data ecosystem.

(example concept note)

## Terms of Reference
TORs for:

1. Data Catalogue. GeoNode or other.
2. Community Mapping
3. Incubator/Innovation Lab
4. OpenDRI Consultant Lead
5. OpenDRI Technical Lead

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