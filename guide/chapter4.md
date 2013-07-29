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

Helping clients to target their DRM investments in areas with the highest potential impact starts from building the data necessary to support the underlying analytical work. The OpenDRI design phase explores how to create an **iterative** process of building up data from the top-down and bottom-up. In parallel, OpenDRI teaches the client new analytical techniques that become possible when data from multiple layers are fused into a risk model.
  
The design of an OpenDRI engagement will generally have three parts: open risk data, open mapping, and impact modeling. Each requires its own work plan. 


***

## 1. Open Government Risk Data
A core objective of OpenDRI is to build an ecosystem of educated users around a national data management system for disaster risk management. The design for OGRD will center on the collation, cleansing, and release of fragmented datasets via one or more data catalogues, usually hosting on GeoNodes. It will also work on creating the policy/legal environment where these data can come together and and building the community of practice around the data.

### Co-Design as a Core Value
The World Bank has learned some hard lessons in the process of building an ecosystem for open risk data with its clients. Implementation by a formal institution **on behalf of** a country is no where near as effective as co-designing and co-deployment **in partnership with** a host government. Whenever conceivably possible, a slow process of designing and building the data catalogue and collating the data should be done with the client leading the process, and formal partners creating the supporting structures. 

<div class="info-box image-right adapted width-200px">
<h4>The GeoNode in Haiti</h4>
<p>Case study of the first and second implementations of the GeoNode in Haiti. A lesson learned: work for the client, not on behalf of the client.</p>
</div>

### Define the Use Case with Early Adopters
Based on the scoping mission, the team will have a map of the champions, allies, skeptics, and gatekeepers for data related to the DRM cycle. It is the early adopters who will function as champions. In general, they will have a set of problems that can only be solved by aggregating data. The scoping team should map out these use cases and decide with which ones which will likely form the core of the initial pilot. (It is important to remember that government officials tend to need to see use cases for data before they release it). 

### Data Catalogue Co-Design
The design of a data catalogue generally begins with a choice: using existing government systems (often proprietary) versus implementing new open systems. This choice needs to be made in conjunction with the client based on several factors:

<div class="info-box image-right adapted width-200px">
<h4>Resources</h4>
<ul>
<li>[Worldbank LAC | AusAID | AIFDR InaSAFE Guides](http://worldbank.org)</li>
<li>[US Open Data Policy Implementation Guide ](http://project-open-data.github.io/schema/)</li>
<li>[US Open Data Policy Metadata Schema ](http://project-open-data.github.io/schema/)</li>
</ul>
</div>

1. **Client Infrastructure**. If the host government has made major investments in building a spatial data infrastructure that uses a proprietary solution, it will likely wish to use OpenDRI as a method of driving additional open data into that infrastructure. If the client has a fragmented ecosystem with several different platforms (or different versions fo the same software), a free and open source solution may be ideal. 

2. **Compatibility with Web Services**. The basic principles of open data require that the complete dataset be available a public Internet address in an open data format using an open web services protocol (e.g., WMS, WFS, etc). If the current implementation of a spatial data infrastructure does not support web services, it would be prudent to work with the client on construction a set of tools that enable open data. More recent versions of ESRI software generally support web services, but the specific version in use will matter.

3. **Extent of Partnerships**. Data that deal with hazards, exposure, vulnerabilities, and risks may be spread over a large number of organizations that are inside and outside of government. They may all be centralized in a handful of ministries. The design of the data catalogue will be heavily influenced by the magnitude of the data aggregation/collation problem.

#### Planning Data Catalogue Architecture
(do we want to detail typical architectural design patterns for GeoNode and ESRI deployments? Or place in appendix?)

### Start with a Gift: fresh imagery
It is common to find that the latest imagery of high-risk areas is quite old or was taken at low resolution (greater than 1m, where 1m is the size of each individual pixel in the digital image). In either case--old imagery or low resolution imagery--the pace of urbanization and construction will not be reflected in the data. One of the best catalysts for new work in DRM is to provide fresh imagery at high resolution. The outputs from this investment (usually in the tens of thousands, if imagery is not available for free through partners) has been:

1. OpenStreetMap activity.
2. Hazard and Risk Analysis by academic institutions.

### Collation of Data
Aggregating data around the DRM cycle is only partly a technical problem. It is mostly a process of building support for the release of existing data and a commitment to collecting new data among a range of actors. The work is mostly about listening to the problems that ministries and partners are having around risk assessment/analysis, then helping them realize that these problems can only be solved when they give each other the data that they need to make decisions.

That said, OpenDRI cannot solve all data sharing problems. It focuses on the issues around the DRM cycle and the datasets that support decision makers around risk assessment, mitigation, preparedness, response, recovery, and reconstruction. The collation of data should center on a) data necessary for solving the use case(s) of early adopters, and b) the data sets that ministries are already prepared to release (low-hanging fruit). 

#### Sidebar Resources
* TBD, To ask MapAction, OCHA.

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

### Writing TORs
ToR: Open Data Lead.
ToR: Data Curator.
ToR: System admin.

***

## 2. Open Participatory Mapping Data
Designing 

### Identifying the Government Sponsor
Who is the early adopter? Where is the data going to go? How does this connect to the imagery made available under the Open Risk Data. 

CoMapper: non OSM person with authority in the ecosystem, who provides attributes to the asset data. By participating and signing off, leads to authority around the data.

### Planning Field Data Collection
What data need to be collected to drive which specific analytical problem? What other data could be collected alongside these data, without overburdening the system? Working with the cross support of risk modelers, compare data models recommended by this design process with the models from previous OpenDRI engagements.

#### Projections

#### Techniques for Participatory Mapping

### Finding the Incubator/Logistics Company
Who will host the meetings, purchase and maintain equipment, and train volunteers? Will this be one entity or a partnership of multiple entities (e.g., HOT + techspace).

Choice: outside ex-pat consulting (like HOT or Groundtruth) or in-country incubator. 

### Academic Reviewer: 
authority in GIS in the country who can evaluate the quality of the asset data via research. Provides basis for QA.

### Writing the Concept Note
The concept note for Open Participatory mapping data TBD.

### Writing the TORs



***

## 3. Risk/Impact Modeling
The process to design risk/impact modeling programs has thus far been bespoke. That said, there are a number of core elements that get put together into the designs:

CHOICE: ministries' with capacity or building outside partnership with Science Agency.

### Science Organization Partnerships
Most OpenDRI risk/impact modeling efforts involve one or more science organizations: Geoscience Australia, JRC, 

### Software Development on Impact models
Who will build the extensions to the models that ministries request?

### Hazard Modeling Coordination
Where will the hazard data web services flow from?

### Ministry coordination
Which ministries are the early adopters for impact modeling? Are their provincial/municipal governments which also wish to use impact modeling? Who will train?

### Writing the Concept Note
Concept note format for Risk/Impact Modeling TBD.

***


***

# Outputs

## Shared Concept of Project
Consensus concept notes between host government/client, Regional DRM contacts, OpenDRI/GFDRR contacts, and partners to building the open data ecosystem.

(example concept note)

## Terms of Reference for necessary contractors
TORs for

1. Data Catalogue. GeoNode or other.
2. Community Mapping
3. Incubator/Innovation Lab
4. OpenDRI Consultant Lead
5. OpenDRI Technical Lead



