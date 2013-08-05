---
layout: guide
navgroup: guide
group: guidechapter
title: 4. Design
excerpt: "xx"
abstract: "Field Guide"
section: II. Practice
---
{% include JB/setup %}

# 4.	Design

<div class="info-box image-right adapted width-200px">
	<h4>Phase Summary</h4>
	<ul>
	<li>Timeline: 1-6 months</li>
	<li>Costs: $$</li>
	</ul> 
</div>

OpenDRI helps its clients to target their DRM investments in areas with the highest potential impact. This work starts from building the data necessary to support the underlying analytical work and creating an environment where design thinking permeates the entire lifecycle of the project. The OpenDRI design phase develops the architecture for an iterative process of building up data from across a network of partners, using a range of tactics, the mix of which may change over time. In parallel, OpenDRI teaches the client new analytical techniques that become possible when data from multiple layers are fused into a risk model.
  
The design of an OpenDRI engagement will generally pull together one or more tactics from a growing toolbox. Three such tactics are now common parts of OpenDRI:

1. Open government risk data: An architecture to collate and distribute open risk data
2. Community Mapping

Each is designed to feed into impact modeling and risk communication. Each requires its own work plan. 

The Design Team should include several experts:

* **Open Data Specialist**: an expert in working with governments around open data, particularly around the politics, policies, and laws of the release of data around the DRM cycle.
* **OpenDRI Technical Specialist**: an expert in the technical mechanisms of collecting, cleansing, and curating open data. This person will specialize in geographic data, including the OpenGeo GeoNode and ESRI GeoPortal.
* **Community Mapping Specialist**: an expert in the implementation of community mapping methods for the collection of exposure data.

***

## 1. Open Government Risk Data
A core objective of OpenDRI is to build an ecosystem of educated users around a national data management system for disaster risk management. The design for OGRD will center on the collation, cleansing, and release of fragmented datasets via one or more data catalogues, usually hosting on GeoNodes. It will also work on creating the policy/legal environment where these data can come together and and building the community of practice around the data.

<div class="info-box image-right adapted width-200px">
<h4>Co-Design as a Core Value</h4>
<p>The World Bank has learned some hard lessons in the process of building an ecosystem for open risk data with its clients. Implementation by a formal institution **on behalf of** a country is no where near as effective as co-designing and co-deployment **in partnership with** a host government and a larger network of DRM partners. Whenever conceivably possible, a slow process of designing and building the data catalogue and collating the data should be done with the client leading the process, and formal partners creating the supporting structures. TBD: detail a case study of the first and second implementations of the GeoNode in Haiti. A lesson learned: work for the client, not on behalf of the client.</p>
</div>

### Define the Use Case with Early Adopters
Based on the scoping mission, the team will have a map of the champions, allies, skeptics, and gatekeepers for data related to the DRM cycle. It is the early adopters who will function as champions. In general, they will have a set of problems that can only be solved by aggregating data. The scoping team should map out these use cases and decide with which ones which will likely form the core of the initial pilot. (It is important to remember that government officials tend to need to see use cases for data before they release it). 

### Data Catalogue Co-Design
The design of a data catalogue generally begins with a choice: using existing government systems (often proprietary) versus implementing new open systems. This choice needs to be made in conjunction with the client based on several factors:

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

GFDRR is developing a guide to deploying GeoNodes, the draft of which can be found here: [GeoNode Deployment Guide](geonode.html).

### Start with a Gift: fresh satellite imagery
It is common to find that the latest imagery of high-risk areas is quite old or was taken at low resolution (greater than 1m, where 1m is the size of each individual pixel in the digital image). In either case--old imagery or low resolution imagery--the pace of urbanization and construction will not be reflected in the data. One of the best catalysts for new work in DRM is to provide fresh imagery at high resolution. The outputs from this investment (usually in the tens of thousands, if imagery is not available for free through partners) has been:

1. OpenStreetMap activity.
2. Hazard and Risk Analysis by academic institutions.

### Collation of Data
Aggregating data around the DRM cycle is only partly a technical problem. It is mostly a process of building support for the release of existing data and a commitment to collecting new data among a range of actors. The work is mostly about listening to the problems that ministries and partners are having around risk assessment/analysis, then helping them realize that these problems can only be solved when they give each other the data that they need to make decisions. Often partners will want to know that they are not the first or only organization to release data.

That said, OpenDRI cannot solve all data sharing problems. It focuses on the issues around the DRM cycle and the datasets that support decision makers around risk assessment, mitigation, preparedness, response, recovery, and reconstruction. The collation of data should center on a) data necessary for solving the use case(s) of early adopters, and b) the data sets that ministries are already prepared to release (low-hanging fruit). 

### Cleansing of Data

<div class="info-box image-right adapted width-200px">
<h4>USAID and Data Cleansing</h4>
<p>Development Credit Authority Crowdsourcing: Case Study on Data Cleansing</p>
</div>

Data that arrives from ministries may not always be ready for release or appropriate for OpenDRI:

* **Open data can be old data**. It may be released from archives where its currency is low and risk to the ministry for its release is low.
* **Data may not have the right schema for DRM analysis**. Transforming exposure data into vulnerability data, where the analysis shows how a building would react to a specific threat, requires having very specific attributes about the built environment. Data collated from ministries may not have these fields, and they may need to be collected afresh.
* **Data may need cleansing**. Data is often collected in ways that prevent its use in analysis. Location information may cram all geographical data into a single column in a database, so that GPS coordinates are mixed with postal addresses or even long-winded descriptions. Quantitative models need to have information in specific formats.
* **Geographic data may be in another projection**. There are many ways to turn the three-dimensional surface of the earth into a flat, two-dimensional map. These various methods are called *projections*. Some geographic data may have been collected using a projection different from the ones used in modern web services architectures. OpenDRI has discovered data in old projections that were customized to specific countries and are incompatible with modern projects, or a colossal drain on staff time to convert to projections that are compatible with open data.

To cleanse the data, it is often necessary to contract a Data Curator, whose is to prepare data for release and make its metadata available in the data catalogue. The design of the OpenDRI engagement needs to include this work. It also needs to guard against a danger inherent in hiring a data curator: focusing on making small datasets perfect that the expense of getting as much data possible available to the community of users. 

### Open Risk Data Advisory Working Group (ORDAWG)
To address underlying issues that prevent data sharing, it is necessary to confront the technical, policy, and science questions together. GFDRR's experience points at the importance of establishing a work group around open data. Membership includes champions from various government ministries, international organizations, and community partners. 

The goal of the work group including building consensus, addressing underlying issues of sharing, exploring solutions to technical problems preventing data sharing, exchanging stories and best practices, and resolving conflicts. Many problems may not be technical, but around licensing, revenues, laws, regulations, and policies. Removing these impediments to data sharing in DRM is only possible by creating consensus among those who need data and control the data. 

#### Community of Practice
How to build the COP. Talk with Bishwa and Brad some more on initial steps. 

### Writing the Concept Note
The concept note for an open government initiative is under development (due late Aug).

### Writing TORs
* ToR: Open Data Lead.
* ToR: Data Curator.
* ToR: System admin.

***

## 2. Community Mapping

Community mapping develops a network of people who are prepared to collect and (importantly) use data about their built environment. It requires bringing together several entities:

* A community mapping partner
* A local government sponsor
* Community mapping trainers

### Community Mapping Partner: Community Sponsor or Incubator?
Designers will need to decide if one of one of the existing community organizations from the scoping mission is prepared to sponsor the community mapping effort, or if the effort will need to either use an incubator with a community mapping consultant to generate local capacity around field data collection and participatory mapping. The criteria to decide this include:

* **Leadership**: do the leaders have the capacity to mobilize a sustained effort over 3-6 months, and then to transition the community into a sustainable organization that can curate data about the built environment into the future?
* **Technical Capacity**: does the organization have the ability to quickly develop the necessary skills to map the built environment?
* **Fiduciary Responsibility**: does the organization have a track record of transparent and accurate finances and efficient/effective use of donor funds?

If a local organization is not found or none are suitable for the task, OpenDRI has funded the creation of an incubator that functions as an innovation lab and community center around mapping and open technology. Based on an idea used by UNICEF and social entrepreneurs (such as iHub in Nairobi), the incubator 

### Local Government Sponsor and CoMapping
In several countries, it has been critical to develop a technique that has become known as comapping. An OpenStreetMap or community mapper partners with a local government official to review data collected from the field on a map. The local government official then comaps with the mapper to add attributes to the data and correct inaccuracies in the polygons. Because of his or her authority in the local ecosystem, the local government official (often a ward chief) can sign off on the accuracy of the mapping, lending far greater authority to the data than would be possible with OpenStreetMap/community mapping work alone. The most common comappers are ward chiefs, GIS officers as well as local officials in land use and disaster management. They each bring a set of relationships that are critical to success of community mapping. They bring the authority to speak with building owners, school and hospital officials, and other individuals who can provide first-hand information about the building stock and construction techniques. 

The design team should ask:

* Is there a local government sponsor who is willing to engage in comapping with the effort to collect data about the built environment?
* Is that local government sponsor willing to lend their authority to the community mapping effort?
* In the country context, what will be necessary to enlist the support of that local government sponsor? Will a request need to be sent from a provincial-level official to the locality? Or will the local leader need to recruited through local relationships?

### Community mapping trainers
The techniques of *participatory mapping* have been developing over the past 20+ years. That said, the OpenStreetMap community has transformed old notions of participatory mapping by creating a central database for geographic data centered around shared open standards. Previously disparate efforts with varied techniques (and accuracy) have gradually coalesced into a relatively uniform practices. 

However, collecting exposure data that accurate describes the built environment is a highly specialized niche within the OpenStreetMap and participatory mapping domain. OpenDRI has pioneered a set of techniques around field data collection, data models, and initial analysis that require the Design team to think beyond traditional participatory mapping efforts. The Design team should therefore include a community mapping trainer with prior OpenDRI experience in the plans for training a local community in the techniques of collecting data about exposure. Where no such community organization exists, the Design team should consider hiring the trainer as the host of an innovation lab or incubator (described below).

### Finding the Incubator/Logistics Company
A tactic that has helped both existing community organizations and outside mapping trainers is an incubator/innovation lab. This shared space acts as an accelerator: an organization rents portions of its physical space to entities that need conference rooms, Internet access, phones, and storage space. Incubators enable community mappers to host meetings, help with the purchase and maintenance of equipment, and provide a space where they can allow volunteers to engage in the hard work of turning field data surveys into maps. The incubator can be thought of as a logistics partner to OpenDRI: it facilitates the effort, providing critical services that otherwise would fall on the OpenDRI management. 

The Design Team should look for a logistics partner who can run the incubator. Typical criteria for selection include:

* **Physical Space**: Provision of a physical space appropriate to the scale and scope of the community mapping effort. This space should have reliable electricity and Internet access, as well as meeting spaces and work spaces. Locked storage for GPS and computing equipment is also important.
* **Services**: the entity should be able to host meetings, draw together a larger network of technologists, and create synergies between mappers and the local technology communities. They are a relationship broker, and might be thought of as a supernode in the Malcolm Gladwell sense (cf. The Tipping Point).

### Designing Field Data Collection
Collecting data from field environments have special challenges, especially in countries where maps are poor and addresses are often a long narrative than a postal address in the traditional sense. The Design team will need to consider several questions to ensure that the project has a solid field data collection design:

* What data need to be collected to drive which specific analytical problem? 
* What other data could be collected alongside these data, without overburdening the system? 

The Design team should work with the cross support of risk modelers and DRM experts, comparing data models recommended by this design process with the models from previous OpenDRI engagements.

#### Imagery
A key component of field data collection is the availability of fresh satellite imagery. Imagery should be of a vintage that it reflects the current built environment. It should also be of 1 meter resolution or better, so that mappers can identify structures and use the imagery to trace building polygons. Coarser resolutions make it difficult to identify individual buildings in dense urban environments and reduce the accuracy of the maps.

#### Data Model
Each country will require its own data model to reflect its architectural traditions, construction methods, and mix of natural hazards. That said, there are many common elements between OpenDRI data models for field surveys. The Design team should ensure that the project is using standard methods, customized to context.

#### Method of Collection: Electronic or Paper
Where possible, the Design team should plan for the collection of data on smart phones and tablets. This method greatly reduces lost time and accuracy from the use of traditional paper surveys. That said, in many places where electricity and Internet is unreliable, paper is the preferred method. The Design team should consult with the OpenDRI specialist to decide which approach will be most viable for the country context.

### Academic Partners

<div class="info-box image-right adapted width-200px">
<h4>Academic Evaluations and the Authority of Community Mapping Data</h4>
<p>An important output from the pilot implementation of an OpenDRI community mapping initiative is an academic paper that assesses the accuracy of the geographic data. OpenDRI tries to have this work performed at a local university, so that the effort connects communities to local experts in GIS, provides jobs for GIS students/graduates, and obtains a local assessment of the quality of the data. A positive report from a respected local university conveys authority (and trust) on community mapping data which would be difficult or impossible to obtain through other means.</p>
</div>

OpenDRI efforts actively engage the partnership of a country's academic institutions. There are two reasons for this natural fit:

* **Students**. OpenDRI efforts greatly benefit from students in geomatics/geography/GIS who participate in the design, implementation, and evaluation of community mapping efforts (as well as open government risk data).
* **M&amp;E**. The evaluation of OpenDRI community mapping data is often best done by professors who can mobilize a research team to ground truth the data collected by volunteers and assess its accuracy in a formal academic paper. 

The Design Team should identify academic partners and configure an agreement with them around support to the collection and evaluation of community mapping data. This agreement will usually take the form of a grant to perform research around the OpenDRI effort that culminates in an evaluation of the pilot implementation.

### Writing the Concept Note
The concept note for Open Participatory mapping data (due Aug)

### Writing the TORs
* Community Sponsor
* Incubator/Logistics Company
* Academic Partners

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



