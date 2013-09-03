---
layout: guide
navgroup: guide
group: guidechapter
title: Data Catalogue
excerpt: "xx"
abstract: "Data Catalogue"
---
{% include JB/setup %}

# Data Catalogues

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

OLD

# Data Catalogue
A core objective of OpenDRI is to build an ecosystem of educated users around a national data management system for disaster risk management. The design for OGRD will center on the collation, cleansing, and release of fragmented datasets via one or more data catalogues, usually hosting on GeoNodes. It will also work on creating the policy/legal environment where these data can come together and and building the community of practice around the data.

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
It is common to find that the latest imagery of high-risk areas is quite old or was taken at low resolution (greater than 1m, where 1m is the size of each individual pixel in the digital image). In either case--old imagery or low resolution imagery--the pace of urbanization and construction will not be reflected in the data. One of the best catalysts for new work in DRM is to provide fresh imagery at high resolution. The outputs from this investment (usually in the tens of thousands of US dollars, if imagery is not available for free through partners) has been paid back many fold in the mapping data generated by communities like OpenStreetMap.

### Collation of Data
Aggregating data around the DRM cycle is only partly a technical problem. It is mostly a process of building support for the release of existing data and a commitment to collecting new data among a range of actors. The work is mostly about listening to the problems that ministries and partners are having around risk assessment/analysis, then seeking out the underlying problems. The data that ministries need to make decisions may be hidden behind fears about what the data describe (national security), the accuracy and age of the data (data quality), or a lack of knowledge of how to harness the data for decision making (capacity building in risk assessment). Regardless of rationale, partners will often want to know that they are not the first or only organization to release data.

That said, OpenDRI cannot solve all data sharing problems. It focuses on the issues around the DRM cycle and the datasets that support decision makers around risk assessment, mitigation, preparedness, response, recovery, and reconstruction. The collation of data should center on a) data necessary for solving the use case(s) of early adopters, and b) the data sets that ministries are already prepared to release (low-hanging fruit). 

### Cleansing of Data

Data that arrives from ministries may not always be ready for release or appropriate for OpenDRI:

* **Open data can be old data**. It may be released from archives where its currency is low and risk to the ministry for its release is low.
* **Data may not have the right schema for DRM analysis**. To analyze how a range of structures in a given area will react to a hazard, an analyst requires data that feed into specific aspects of a model. Data collated from ministries may not have these fields, and they may need to be collected afresh.
* **Data may need cleansing**. Data is often collected in ways that prevent its use in analysis. Location information may cram all geographical data into a single column in a database, so that GPS coordinates are mixed with postal addresses or even long-winded descriptions. Quantitative models need to have information in specific formats.
* **Geographic data may be in another projection**. There are many ways to turn the three-dimensional surface of the earth into a flat, two-dimensional map. These various methods are called *projections*. Some geographic data may have been collected using a projection different from the ones used in modern web services architectures. OpenDRI has discovered data in old projections that were customized to specific countries and are incompatible with modern projects, or a colossal drain on staff time to convert to projections that are compatible with open data.

To cleanse the data, it is often necessary to contract a Data Curator, whose is to prepare data for release and make its metadata available in the data catalogue. The design of the OpenDRI engagement needs to include this work. It also needs to guard against a danger inherent in hiring a data curator: focusing on making small datasets perfect that the expense of getting as much data possible available to the community of users. 

***

#### Data/Tags
Establish the tags to be used.







