---
layout: guide
navgroup: guide
group: guidechapter
pagetype: core

title: 5. Piloting
excerpt: "xx"
abstract: "Field Guide"
section: II. Practice
category: guide

---

{% include JB/setup %}

# 5.	Piloting

<div class="info-box image-right adapted width-200px">
	<h4>Phase Summary</h4>
	<ul>
		<li>Timeline: 3-12 months</li>
		<li>Costs: ?</li>
	</ul> 
</div>

The Design team will spend several weeks or even months building consensus among the partners, writing concept notes and terms of reference that require several organizations (and several departments within those organizations) to come to agreement and release funding. Once funding flows, however, work in the field can lead to relatively fast outputs.

The piloting phase collates existing data from government archives, performs the first field data collections, and convenes the stakeholders necessary for developing an environment conducive to open data.

***

## Objectives
The primary objective of a pilot is to open the imagination of the partners to what is possible when they share data about risk. The pilot provides a tangible use case to focus the efforts of multiple organizations on building the various parts of an open data ecosystem, some of which may be accessible only inside of government, some of which may be fully public. In some cases, the pilot provides in impetus to get over "last mile" problems, where partners have already made great strides towards building risk data but are prevented from launching their work by a mix of problems that often were discovered only by engaging with the task.  

OpenDRI does not require a client country to start a "whole of government" open data program. However, it requires a significant commitment to release data in a narrow band of areas about natural hazards, the built environment, and the threats that disasters pose to a society. The work from the bottom up will build up the proof that this kind of data can be released in open formats on open platforms. There are two parts to this approach:

1. **Data Collation and Release**. A process with the Open Data Working Group and the GeoNode that centers on obtaining access to existing datasets and then preparing them for release.
2. **Data Collection and Release**. A process that center on the collection of data about the built environment and its exposure to the natural hazards of the place. Community mapping is one tactic in this area and the main focus of this guide, though other partners will add to these approaches.

Once data is flowing in a pilot, the Open Data Working Group will need to confront policy and management issues around the new repository, including data access rights for certain privileged groups. They will also want to start learning how to apply the data to risk impact models or other analytical products, reinforcing the value of open data and expanding their understanding of *why* the project is collating and collecting data for DRM.

***

### 1. Data Collation

The first steps in each OpenDRI engagement has been to create a place where data can be shared and to hire a Data Curator, to manage this collation process. The data catalogue is meant to be a neutral space: a place where the data is legally and technically open for use by all (or at least those who have access to it). In a few cases, this space has solely been OpenStreetMap. In most cases, client ministries wish to have a data catalogue where they can upload datasets that are meant to be opened. The [process for building these data catalogues](datacatalogue.html) is described in the Methods section.

#### Data Curator
The Data Curator is generally a technical specialist with GIS training as well as data management background. He or she will be able to perform the following work: 

1.  Upload spatial data layers into the data catalogue
2.  Ensure metadata is entered into the platform in compliance with World Bank GeoSpatial Metadata standards (based on ISO 19115:2003).
3.  Style the uploaded datasets using the SLD format to allow for basic visualization on the platform.
4.  Create of a suite of basic “mashups” or maps with data made available on the platform in close collaboration with the Open Data Working Group and other stakeholders.

A [Terms of Reference](tors/scoping/datacurator.html) is under development for this role. 

#### Collating the First Data Sets
Collating the *right* data is the key to keeping the project focused on solving problems around the DRM cycle. In general, OpenDRI data will have three attributes:

1. It will be **geospatial**, with geographic attributes that describe some aspect of the human systems and built environment and the hazards that may affect people and infrastructure.
2. It will be in **open data formats** and compliant with [Open Geospatial Consortium](http://www.opengeospatial.org/) (OGC) standards.
3. It will match the **use case** of the client.

<div class="info-box image-right adapted width-200px">
	<h4>The Use Case of the GeoNode in Malawi</h4>
	<p>When the government of Malawi built a pilot instance of OpenDRI, it focused efforts on one hazard in a single region: flooding in the lower Shire valley. This effort enabled multiple ministries to collect and prepare data related to meteorology, climate change, and geospatial analysis for upload into a GeoNode. In the initial pilot, the focus excluded data related to other hazards, but enabled ministry officials at the national and regional levels to learn how to work in an open data ecosystem.</p>
</div>

#### Collect the data for the use case
Within a single use case, there may be several types of data that need to be aggregated and prepared for release. These include:

<div class="info-box image-right adapted width-200px">
<h4>Different types of Geospatial Data</h4>
<ul>
<li><strong>Point Data</strong>: a single point of information, plotted at a coordinate without a containing polygon. Datasets in this format often get visualized a series of points or pins to represent instances of the data a coordinates on a base map.8</li>
<li><strong>Raster Data</strong>: "A raster data structure is based on a (usually rectangular, square-based) tessellation of the 2D plane into cells". See <a href="http://en.wikipedia.org/wiki/Raster_data">http://en.wikipedia.org/wiki/Raster_data</a></li>
<li><strong>Vector Data</strong>: "an abstraction of the real world where positional data is represented in the form of coordinates. In vector data, the basic units of spatial information are points, lines and polygons. Each of these units is composed simply as a series of one or more coordinate points." <em>source</em>: <a href="http://www8.nos.noaa.gov/coris_glossary/index.aspx?letter=v">http://www8.nos.noaa.gov/coris_glossary/index.aspx?letter=v</a></li>
</ul> 
</div>

##### 1. Imagery
An imagery archive allows for analysis over time. If the archive includes imagery from recent pre- and post-disaster contexts, it may permit analysis of the effectiveness of certain types of interventions. Where possible, imagery should be made available with metadata to describe what the imagery shows.

##### 2. Maps
Mapping data may vary widely in quality and vintage. It is important to get recent data into the GeoNode, less so than an archive. 

##### 3. Streets and Critical Infrastructure
Vector data about the streets and major logistics routes are critical during emergencies. Modeling how they would be affected by hazards is a core feature of OpenDRI. These data are needed to make those models.

##### 4. Building Footprint Data
Building footprint data captures the polygons of each structure in the built environment. This data may be protected for various reasons, including potential market value, prior agreements with private firms, and privacy laws. When available, building footprint data may also have issues with resolution, project, accuracy, and vintage. Building attributes (such as number of stories and building materials) are not always present in the data, but a critical for making accurate models. 

##### 5. Hazard Maps
To create risk assessment models, analysts require information about local hazards. The OpenDRI team should look for data that describes: 

* **Floods and Tsunami**. For water (hydromet), the resolution of the topolography of the region under analysis becomes critically important. In many parts of the world, the best available digital elevation model (DEM) may be 30 *meters* in resolution. In flat river valleys where altitude changes very slowly, flood inundation models with 30m DEMs could be wildly off. As a result, it is crucial to assess DEMs available for hydromet analysis.

* **Earthquakes**. Seismic maps and models that show fault lines, project shakemaps for various epicenters. The GEM may provide the best available data.

* **Cyclone Maps**. Cyclones are hard to predict, but patterns of cyclonic activity tend to follow pathways over time. (ref for cyclone data?)

* **Landslide**. Landslide data can be hard to obtain or difficult to get released due to perceptions of commercial value. (research what is needed)

* **Droughts**. (Will we include droughts?)

### Assess Data Quality and Licensing
Data that has been in government archives may derive from a range of sources. It may have been collected by the government, it may have been given to the government by a development partner or UN agency, or it may have been purchased by the government from a private vendor. The Data Curator should ensure that any data referenced in the data catalogue carries the associated sources and licenses associated with the data. GFDRR is build a metadata standards around the GeoNode (see [GeoNode guide](geonode.html).).

The Data Curator also will need to assess the quality of the data submitted to the catalogue. In many cases, the vintage of the data may make it more useful for detecting trends than analysis of current risks. The data may have been collected in a geographic projection which makes it difficult to rectify with open standards. Areas where quality needs to be remediated need to be flagged.

### Cleanse the Data
<div class="info-box image-right adapted width-200px">
<h4>USAID and Data Cleansing</h4>
<p>Development Credit Authority Crowdsourcing: Case Study on Data Cleansing</p>
</div>

All data sets are imperfect; the question comes about balancing the level of effort remediating those inaccuracies with the precision needed for the particular use case. The Data Curator needs to choose which data is highest priority for the time consuming task of data cleansing (or munging, in technical jargon). He or she will likely enlist the assistance of other members of the growing Open Risk Data Working Group, who may have specific domain knowledge or skills around particular types of data cleansing. 

### Negotiate the release of data
The Data Curator and OpenDRI Lead will spend a great deal more time negotiating the release of data than the System Administrator will spend building the technical infrastructure. Lobbying for the release of information requires having a clear use case that officials can understand and contribute to. It also requires listening to their concerns and addressing those issues with documented cases of how open data has worked in other countries. 

Often, fear and insecurity about the data lurks as a hidden issue behind other excuses. Opening data implies loss of control. It also exposes errors that may have been made in the collection and curation of data over time--faults which will only be perpetuated by keeping the data closed. Agencies may be obligated to curate data by law, but may not have the data or may worry that it is so error-filled as to potentially cause legal liability around its release. Licensing and loss of revenues may be an issue, though these tend to be smaller in magnitude than is understood. In each case, the Data Curator and OpenDRI Lead will need to find ways to enable agencies to save face.

### Release of the Data Catalogue for Public Use
The audience for the data catalogue generally falls into several classes of individuals: 

* Government Data Providers
* Government Data Users
* Private Sector
* Non-governmental Organizations
* General Public

It is important for the OpenDRI pilot team and data catalogue team to develop a strategy around the release of the data catalogue for each population. The release within the smaller DRM ecosystem may require workshops that answer detailed technical questions. The release to the general public may involve more political and public relations concerns about managing perception of the initiative as well as the demand on government officials' time that open data may create.

### Lessons Learned
Opening government data is not always easy, even when the use case is clear and champions inside key ministries want to help. OpenDRI has a growing pool of lessons learned:

##### Be prepared for less than fully open
Open data may require protections. It may need to have copyrights, acknowledgements, and/or restricted access to make it open. In the early stages of open data, it may be necessary to have some data be available to a limited part of the larger ecosystem. 

##### Invest in release of data rather than perfection of data
A lesson learned from previous engagements is that it is possible to spend inordinate amount of time preparing small percentage of the data, instead of collating data from many sources. In one case, an contractor spent most of his hours fixing the projections of a small number of datasets, instead of building system to aggregate data. Government officials may have a very rational fear of releasing inaccurate data. Their jobs may be on the line. That said, from the perspective the open data effort, it may be better to flag data as needing helping and moving through larger volume than working on specific data and spending consulting hours on big changes to small data sets. OpenDRI Pilot Team staff need to be prepared to balance the need for accuracy with the need for comprehensive releases of data around the DRM cycle. In addition, the team should ensure that any concerns about data quality appear in the metadata.

***

## 2. Collecting New Data
The first pilot of a field data collection effort initiative generally starts in one city, and potentially, within one neighborhood of a large city. The objective is to train a small pool of energetic mappers into a team that can a) collect the first data and adapt initial approaches to the problems they discover in the field, and b) recruit and train other mappers as the initiative moves into the Scaling phase. OpenDRI has thus far used community mapping as the tactic to implement this objective. 

**Note**: The OpenCities Project has created a toolkit which covers the implementation details of community mapping. This section provides a strategic overview of the OpenCities methodology. A link to this resource will be added when the Toolkit is published.

### Team
The team starts with OpenDRI community mapping trainers, who have expertise in the application of community mapping practices to the collection of exposure data, preferably in the local context. The trainers need to ensure that the team builds skills in several areas:

* Mapping and GIS
* Software Development and Graphic Design
* Outreach, training and mobilization

The team consists of several key roles: 

#### Project Lead
The project lead is (ideally) a local national who can work with the trainers to connect the pilot with a network of relationships that they have within government, academia, and the NGO/IO community. The Project Lead manages the operations of the pilot, and therefore must have both management skills as well as a solid understanding of project management, participatory mapping, GIS, communications/social media, and community/grassroots organizing. The Lead will be the coordinator with the incubator, will hire other team members, and coordinate with the OpenDRI trainers on the field data collection methods and tools.

#### Administrative Assistant
The pilot require a person who maintains project finances, contracts, clerical duties, and emergent needs around the work space. The AA will track and record project activities in a log, which will help sponsors see how mapping is progressing and enable the Communications Lead to message the growth of the project to a larger audience. The AA may be asked to manage equipment sign-ins and sign-outs and to ensure that inventory of mapping (and office) supplies are kept at planned levels.

#### Champions
Several key skill sets are core to the pilot and generally are found by hiring professional 'champions', who can solve technical challenges and train others. These include:

##### Technology Coordinator
A technologist who can make devices and computers work and can coordinate with the AA over the signout of technology equipment (such as GPS units).

##### Software Developer
The pilot generally uses open-source software, which often needs to be customized to needs that are only discovered during the field data collection. The software developer should be skilled in programming around the software packages used in the pilot and capable of making customizations to meet team needs. He or she may also be asked to develop applications ('apps') that facilitate the growth of the community.

##### Geospatial Specialist
The pilot will encounter GIS challenges in the data entry. This GIS specialist will assist with building the team's knowledge of participatory mapping and geomatics. He or she will have experience with land surveying, remote sensing, cartography, and GIS.

##### Participatory Mapping Specialist
Participatory mapping also has its challenges in training, field data collection, data entry, and quality assurance. The Participatory Mapping Specialist will be a key resource around these issues. He or she will likely have a background in GIS, Geography, Computer Science or a related field and have some experience working on community-based participatory mapping projects. It is preferable to have knowledge of OSM and other open-source GIS tools, such as QuantumGIS.

#### Field Data Collectors
The core of the project are the teams of field data collectors, who perform the field data collection and data entry into the GIS application. They tend to be students, who may be studying geography/GIS or computer science and are quick to learn.

#### Occasional Roles
More complex projects may require additional help in operation management, M&amp;E, and communications. The OpenCities Toolkit has a description of additional roles in these areas.

### Activities

#### Setup
The initial stages of pilot center on the logistics of starting-up a new initiative. These activities include:

##### Contracting Incubation Space
Under its ToR with OpenDRI, the incubator/logistics company will work with the Project Lead to contract a work space. This office may be solely for use by the project, or more commonly, it may work with an existing innovation space or incubator to bring OpenDRI into a larger community of entrepreneurs and technologists. This latter option is preferable because it exposes the team to additional resources and provides a platform for building relationships, which is important for scaling the initiative.

##### Obtaining Equipment
The logistics company will need to purchase computers, GPS units, PDAs/smart phones, communications tools (radios/phones), and potentially, some office software (though most software needed is free and open source). The OpenDRI pilot management team will need to ensure that this equipment has a plan to ensure its security, and that any devices which go into the field have a basic sign-in and sign-out procedure. 

##### Hiring Staff
The OpenDRI trainers will likely already have the Project Lead under ToR from the Design phase. This management team will reach out to universities and other partners so that they can hire the rest of the staff. It is recommended that the pilot hold an event to raise awareness, recruit surveyors, and tell the story about what OpenDRI is doing.

##### Developing the questionnaire for field data collection
Based on the data model from the Design phase, the team will work with the Geospatial lead, local universities, local government champion, and other experts to develop the questionnaire that surveyors will use in the field. This document needs to be short, yet cover the necessary data for tens of thousands of buildings. It can be changed, but alterations affect how commensurate data will be between earlier and later versions, and may require resurveying large areas. Careful thought should go into this document. The OpenCities Toolkit has deeper levels of detail on how to build the questionnaire. 

#### Training
Once the space and staff are hired and ready for work, the pilot is ready for training in community mapping of exposure data. In general, this training will consist of the following skills:

* OpenStreetMap: how to enter data into the OpenStreetMap wiki or other geospatial platform.
* Field Data Collection Techniques: how to use a GPS unit, paper maps, and field survey tools to collect data that can be entered into the OpenStreetMap database.  
* NOTE CONTROVERSY: Exposure Mapping: how to examine a building and understand how its construction is exposed to natural hazards, including common signs of structural weakness.
* Questionnaire: a training to bring together how the questionnaire developed for the pilot related to OpenStreetMap, Field Survey Techniques, and Exposure Mapping.

The National Society for Earthquake Technology&ndash;Nepal has built a training manual to teach how to read a building for structural weaknesses (add link when approved).

#### Data Collection: Field Surveys and Mapping Parties
<div class="info-box image-right adapted width-200px">
<h4>Making the Work Fun is Good Business Sense</h4>
<img src="/assets/images/mapcake.png" title="Risk Assessment Triad: Hazards, Exposure, Vulnerability" width="150">
<p>Mapping is a social activity. It can be very technical and tedious, but it should also be fun. For many years, large mapping parties have traditionally ended with map cakes, where the frosting is printed into a map that reflects the hard work of the team. The activity builds a sense of collective accomplishment. It also forms the core energy and network of relationships that allow for the project to scale.</p>
</div>

When surveyors have been trained, the pilot begins to collect data via mapping parties. These events organizing between 10-40 mappers to collect data in a specific region of a city, with the goal of being as comprehensive as is possible for that region. 

Mapping parties generally last several hours, depending on how long the team needs to travel from the work space to the area that needs to be surveyed.  If transportation is needed, the incubator/logistics company should arrange for rentals, drivers, or other arrangement suitable to context.

When teams return to the work space, they should enter their data into OpenStreetMap as a social activity, where experts can aid surveyors with questions about how to code specific attributes and answer any unexpected issues that emerge. More information can be found in the OpenCities Toolkit. This routine becomes the daily work for several months, until the goals of the pilot are reached.

#### Data Quality Assessment: Coverage, Accuracy, reviews with team
As the surveying teams progress, it is important that the geomatics lead work with local universities and other OpenDRI experts to assess the quality of the data that is being entered into OpenStreetMap. OSM novices often make mistakes, and this problem is amplified by the specificity required in the entry of exposure data. When a pattern emerges in the consistent miscoding of certain information, the management team should train volunteers around the issue. 

### Participatory Mapping: Troubleshooting politics and perceptions
Participatory mapping has been a technique for more the 20 years. It has a wide variance in the quality of work. Several national mapping agencies have reacted to poor quality of participatory mapping data, especially when those activities have not adhered to national or international standards for mapping data. the advent of OpenStreetMap has largely addressed the core concerns in this area. That said, OpenDRI team should work with the national mapping agencies to understand its standards and adhere as closely as possible to them.

***

## 3. Policy Development
The space for OpenDRI to develop pilots requires coordination and communication between the various ministries and partners. This process is relationship intensive: it requires building trust through consistent contact as well as the delivery of small bits of data across previously unscalable boundaries. The chief ally for this work is the Open Data Working Group and the country offices of the DRM project managers (TTLs) that OpenDRI is supporting.

### Open Data Working Group
(this is an area where we need to explore additional cases around how OpenDRI works with ODWG to develop its policies)

#### Develop a Plan for Data Access
The partners must also decide on who can have access to the data and under what terms. For data to be open, it needs to be licensed so that it can be capable of being redistributed, so that it can be turned into derived works that reuse the original data. Getting to this point is often a process:

1. **Manual Interagency Sharing**: government agencies transfer data on a case-by-case basis using *ad hoc* means.
2. **Internal Government Data Catalogue Network**: government agencies exchange data using a confederation of data catalogues and web services.
3. **Open Government Data**: one-way sharing of government data to the public, sometimes via specific authorizations for specific individuals.
4. **Open Linked Data**: the government and public participate in a data commons, where everyone exchanges data.

### DRM Project Managers
(this is an are where we need additional data. What are the key lessons learned from developing the pilot with the DRM team in a region or country? What do they need to know on a weekly or monthly basis)?

### Reporting Strategy
OpenDRI has developed monthly progress reports to keep partners informed about what data is being collected and released. It provides a summary of the key achievements, a table of the latest data summary figures and participation numbers, as well as an area for lessons learned and future plans. The format may be found here: [Progress Report Template](reports/progressreport.html).

***

## 4. Demonstrations of Analytical Products
The goal of OpenDRI is to provide the data that others can transform into tools that explore risks from natural hazards. However, there are few stronger incentives to expand data collation and collection efforts than seeing newly available data turned into an analytical product&mdash;especially a visualization that shows something unexpected or confirms a hunch which previously had no evidence to support it. OpenDRI frequently partners with other efforts in DRM to provide this link between DRM data management and DRM analysis.

### InaSAFE
Built through a partnership between the Australian Indonesian Fund for Disaster Reduction (AIFDR), Geoscience Australia, and the World Bank, the InaSAFE tool is a free and open-source risk communication tool for non-technical users. It allows anyone to pull information about the built environment together with models of natural hazards and create a scenario that shows the potential impact of the hazard on the built environment. 

InaSAFE is built as an easy-to-install plugin for another open-source GIS desktop software QuantumGIS (often called qGIS). It can pull data from the GeoNode or other web services, OpenStreetMap, and models like the Global Earthquake Model or several tsunami and flooding models built by Geoscience Australia and other partners.

### CAPRA
(team: we need an explanation and example of the link between an OpenDRI project and CAPRA. Who has documentation: concept notes, ToRs, graphics, etc? Bolivia? LAC?)

***

## Who

### Management Team

The Pilot Management Team often includes three expert consultants:

* **OpenDRI Lead**: an expert manager of the integration of various tactics into a comprehensive strategy around DRM data collection and curation.
* **Community Mapping Lead**: an expert in the implementation of community mapping methods for the collection of exposure data.
* **Open Data Catalogue Specialist**: an expert in the technical mechanisms of collecting and cleansing data from government ministries and community mapping efforts into a comprehensive data catalogue. This expert will have skills to train local officials in the deployment of an OpenGeo GeoNode or the use of existing ESRI GeoPortal as data catalogue.

***

## Outputs and Metrics
The pilot produces data and grow community. As a result, its output metrics center on these two issues.

### Data
* Coverage/Extent: what percent of the country's risk areas are reflected in the data sets?
* Vintage: how new is the data across the coverage of the country?

### Community
* Surveyors: how are the number of surveyors scaling over time? What turnover exists?
* Outputs: what is the productivity of the surveyors over time? What is the quality of that effort?
* Social Network: what is the shape and vector of the social network? Who are the supernodes? How many new nodes?

***

## Case: Nepal: Pilot of Kathmandu.

In early 2012, the World Bank's South Asia Region (SAR) engaged in the project with Nepal's Ministries of Education and Health to retrofit schools and health facilities against seismic risks in the Kathmandu valley. The prioritization of this investment required knowing both where these facilities were located and the relative exposure of these structures to earthquakes. When the teams could not locate a comprehensive list of schools or health facilities to begin their risk assessment, they turned to the GFDRR team that was working on OpenDRI.

### Scoping
Through a series of meetings, GFDRR introduced SAR and the GoN to the work that OpenStreetMap had done in Indonesia under AIFDR as well as the OSM efforts in the Kotse Valley with the American Red Cross. Based on the need to collect high-resolution data about more than 10,000 buildings in Kathmandu, SAR and the GoN worked with GDRR to fund an OpenStreetMap effort to map every school and health clinic in Kathmandu. In the process, SAR and GFDRR agreed to create the first site in a new OpenCities Project, where open data and efforts like OpenStreetMap would be used to catalyze better urban planning.

### Design
The pilot focused on building a field data collection work flow that would allow for the rapid discovery and mapping of schools and hospitals in the Kathmandu valley. This required establishing a task force of ministries and local partners to advise the effort and provide the authority for the work. It also required building an innovative approach to rapidly mapping an unknown number of facilities. 

#### Community Mapping
The pilot used the innovation lab design, contracting with a local incubator (Biruwa) host and help mobilize field data collectors. The team included an OpenDRI specialist who went on a three-month mission to Kathmandu; a local OSM consultant who had recently completed a PhD around OpenStreetMap; and a part-time knowledge manager, who was responsible for tracking progress and lessons learned. The team trained a staff of 13 interns, who in trained over 350 local mappers.  They divided city into 4 quadrants, and used [mapmyschool.org](http://mapmyschool.org) to locate schools and health facilities not found on any list. Volunteers were also given a letter from the Ministry of Education to help allay concerns of principals who were reluctant to share information or allow teams onto their property. 

### Data Quality
In first three months, the mappers collected over 65,000 building footprints using a detailed [field data collection form](schema/nepal_field_survey.html). The project also partnered with the Nepal Society of Earthquake Technology, a local that provides seismic and structural engineering consulting, and two universities, where professors and engineers provided QA on the data. 

#### NSET
NSET reviewed a sampling of small percentage of the buildings surveyed by the volunteers. They flagged issues to adjust training, and then provided that training to volunteers. It helped to taking pictures of every building along the way, enabling engineers to review both photos and forms.

#### University College, London
Similar to UGM study from Indonesia, the team worked with Muki Hakley, who gave advice to the Geomatics Dept at Kathmandu University on assessment of geometry of data and fitness of use. Professor Hakley also reviewed the accuracy of building footprints, road networks (where roads overlap), and other aspects of the data.

### Demonstrating Analytical Products
A team from Stanford University is currently building earthquake risk models from the data collected in Kathmandu, with plans to show how the impact of a seismic event on the municipal facilities that would be critical sites for a response operation.

