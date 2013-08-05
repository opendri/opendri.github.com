---
layout: guide
navgroup: guide
group: guidechapter
title: 5. Piloting
excerpt: "xx"
abstract: "Field Guide"
section: II. Practice
---
{% include JB/setup %}

# 5.	Piloting

<div class="info-box image-right adapted width-200px">
<h4>Phase Summary</h4>
<ul>
<li>Timeline: 3-12 months</li>
<li>Costs: $$</li>
</ul> 
</div>

Turning the design into the first pilot often takes 1-6 months of work. The Design team will spend time building consensus among the partners, writing concept notes and terms of reference that require several organizations (and several departments within those organizations) to come to agreement and release funding. Once funding flows, however, work in the field can lead to relatively fast outputs.

The piloting phase builds the first instances of a data catalogue, collects the first participatory mapping data, and (context permitting) may allow government officials to apply the new data to initial impact models of known hazards. 

The Pilot Management Team should include several experts:

* **OpenDRI Lead**: an expert manager of the integration of various tactics into a comprehensive strategy around DRM data collection and curation.
* **Open Data Catalogue Specialist**: an expert in the technical mechanisms of collecting and cleansing data from government ministries and community mapping efforts into a comprehensive data catalogue. This expert will have skills to train local officials in the deploment of an OpenGeo GeoNode or the use of existing ESRI GeoPortal as data catalogue.
* **Community Mapping Lead**: an expert in the implementation of community mapping methods for the collection of exposure data.

***

## 1. Open Government Risk Data

If OpenDRI is working with the client government on a Open Government Risk Data initiative, the OpenDRI data catalogue lead will identify consultants to partner with client on a campaign to collect, co-map, cleanse, and analyze new data around the DRM cycle. These consultants may be government officials or may be outside experts. In either case, they will learn how to prepare existing data for release and management the data catalogue as a sustainable resource.

### Building the first data catalogue (GeoNode)
The first installation of a GeoNode unfolds in several ways. 

* **Self-Installation**: There may be a government champion with sufficient technical skill that he or she can install the software and configure it with minimal outside assistance. In some cases, this work can happen with Skype support. 
* **Consultant Installation**. The GeoNode can be installed by local or ex-patriot consultants.
* **GFDRR Installation**. The GeoNode can be installed by GFDRR staff.

#### Team
In general, across all three deployment options, there are at least three roles that need to be filled:

* **ToR: System admin**. A person competent in Linux or the operating system on which ESRI is installed, capable of installing sometimes complicated code.
* **ToR: Data Curator**. A person capable of negotiating the release of data from partner ministries, who can cleanse and prepare data for release to the public.
* **ToR: GeoNode Consultant**. A person who can developed the data catalogue in GeoNode, including the front-end customized to the context.

#### Technical Infrastructure
The technical requirements for a GeoNode installation are being developed in a [GFDRR Installation Guide](geonode.html). The System Administrator will be responsible for:

* Server(s): Configuring the technical platform on which the data catalogue will be hosted.
* Domain Name: obtaining a domain name and negotiating its use with various partners.
* System Configuration: installing necessary software and configuring it for use on the Web.

### Collating Geo-Data
Collating the right data is the key to keeping the project focused on solving problems around the DRM cycle. OpenDRI data for the GeoNode needs to be:

1. GeoData: it needs to have geographic attributes that describe some aspect of the human systems and built environment and the hazards that may affect people and infrastructure.
2. Open Format: Data must be compliant with Open Geospatial Consortium (OGC) standards
3. Reusable: the data must be licensed so that it can be redistributed and turned into derived works that reuse the original data.

### Negotiating the release of data.
The Data Curator and OpenDRI Lead will spend a great deal more time negotiating the release of data than the System Administrator will spend building the technical infrastructure. Lobbying for the release of information requires having a clear use case that officials can understand and contribute to. It also requires listening to their concerns and addressing those issues with documented cases of how open data has worked in other countries. Often, fear and insecurity about the data lurks as a hidden issue behind other excuses. Opening data implies loss of control. It also exposes errors that may have been made in the collection and curation of data over time--faults which will only be perpetuated by keeping the data closed. Licensing and loss of revenues may be an issue, though these tend to be smaller in magnitude than is understood. 

#### What data to ask for? 
OpenDRI does not require a client country to start a whole of government open data program. It requires a significant commitment to release data in a narrow band of areas about natural hazards, the built environment, and the threats that disasters pose to a society. Among the data necessary are:

##### 1. Imagery
An imagery archive allows for analysis over time. If the archive includes imagery from recent pre- and post-disaster contexts, it may permit analysis of the effectiveness of certain types of interventions. Where possible, imagery should be made available with metadata to describe what the imagery shows.

##### 2. Maps
Mapping data may vary widely in quality and vintage. It is important to get recent data into the GeoNode, less so than an archive. 

##### 3. Streets and Critical Infrastructure
Vector data about the streets and major logistics routes are critical during emergencies. Modeling how they would be affected by hazards is a core feature of OpenDRI. These data are needed to make those models.

##### 4. Building Footprint Data
Building footprint data is the basis for making almost all exposure, vulnerability, and risk models. That said, this data may be protected for various reasons, including potential market value, prior agreements with private firms, and privacy laws. When available, building footprint data may also have issues with resolution, project, accuracy, and vintage. Building attributes (such as number of stories and building materials) are not always present in the data, but a critical for making accurate models. 

##### 5. Hazard Maps
To make models of exposure, vulnerability, and risk, analysts require information about local hazards. The OpenDRI team should hunt for data that describes: 

* **Floods and Tsunami**. For water (hydromet), the resolution topology of the region under analysis becomes critically important. In many parts of the world, the best available digital elevation model (DEM) may be 10 *meters* in resolution. In flat river valleys where altitude changes very slowly, flood inundation models with 10m DEMs could show water flowing uphill--a physically impossible result. As a result, it is crucial to assess DEMs available for hydromet analysis.

* **Earthquakes**. Seismic maps and models that show fault lines, project shakemaps for various epicenters. The GEM may provide the best available data.

* **Cyclone Maps**. Cyclones are hard to predict, but patterns of cyclonic activity tend to follow pathways over time. (ref for cyclone data?)

* **Landslide**. Landslide data can be hard to obtain or difficult to get released due to perceptions of commercial value. (research what is needed)

* **Droughts**. (Will we include droughts?)

#### Lessons Learned
Opening government data is not always easy, even when the use case is clear and champions inside key ministries want to help. OpenDRI has a growing pool of lessons learned:

##### Be prepared for less than fully open
Open data may require protections. It may need to have copyrights, acknowledgements, and/or restricted access to make it open. In the early stages of open data, it may be necessary to have some data be available to a limited part of the larger ecosystem.

##### Invest in release of data rather than perfection of data
A lesson learned from previous engagements is that it is possible to spend inordinate amount of time preparing small percentage of the data, instead of aggregating data. Government officials may have a very rational fear of releasing bad data. Their jobs may be on the line. That said, from the perspective the open data effort, it may be better to flag data as needing helping and moving through larger volume than working on specific data and spending consulting hours on big changes to small data sets. OpenDRI Pilot Team staff need to be prepared to balance the need for accuracy with the need for comprehensive releases of data around the DRM cycle.

### Assessing Data Quality and License Assessment
Data that has been in government archives may derive from a range of sources. It may have been collected by the government, it may have been given to the government by a development partner or UN agency, or it may have been purchased by the government from a private vendor. The Data Curator should ensure that any data referenced in the data catalogue carries the associated sources and licenses associated with the data. GFDRR is build a metadata standards around the GeoNode (see [GeoNode guide](geonode.html).).

The Data Curator also will need to assess the quality of the data submitted to the catalogue. In many cases, the vintage of the data may make it less useful than would be expected. The data may have been collected in a geographic projection which makes it difficult to rectify with open standards. Areas where quality needs to be remediated need to be flagged.

### Cleansing the Data
<div class="info-box image-right adapted width-200px">
<h4>USAID and Data Cleansing</h4>
<p>Development Credit Authority Crowdsourcing: Case Study on Data Cleansing</p>
</div>

All data sets are imperfect; the question comes about balancing the level of effort remediating those inaccuracies with the precision needed for the particular use case. The Data Curator needs to choose which data is highest priority for the time consuming task of data cleansing (or munging, in technical jargon). He or she will likely enlist the assistance of other members of the growing Open Risk Data Working Group, who may have specific domain knowledge or skills around particular types of data cleansing. 

### Release of the Data Catalogue for Public Use
The audience for the data catalogue generally falls into two classes of individuals: the ecosystem of analysts around the DRM cycle, and the general public. It is important for the OpenDRI pilot team and data catalogue team to develop a strategy around the release of the data catalogue for both populations. The release within the smaller DRM ecosystem may require workshops that answer detailed technical questions. The release to the general public may involve more political and public relations concerns about managing perception of the initiative as well as the demand on government officials' time that open data may create.

***

## 2. Community Mapping of Exposure Data
The first pilot of a community mapping initiative generally starts in one city, and potentially, within one neighborhood of a large city. The objective is to train a small pool of energetic, smart mappers into a team that can a) collect the first data and adapt initial approaches to the problems they discover in the field, and b) recruit and train other mappers as the initiative moves into the Scaling phase.

**Note**: The OpenCities Project has created a toolkit which covers the implementation details of community mapping. This section provides a strategic overview of the OpenCities methodology.

### Team
The team starts with OpenDRI community mapping trainers, who have expertise in the application of community mapping practices to the collection of exposure data, preferable in the local context. The trainers need to ensure that the team builds skills in several areas:

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

##### Geomatics Specialist
The pilot will encounter GIS challenges in the data entry. This GIS specialist will assist with building the team's knowledge of participatory mapping and geomatics. He or she will have experience with land surveying, remote sensing, cartography, and GIS.

##### Participatory Mapping Specialist
Participatory mapping also has its challenges in training, field data collection, data entry, and quality assurance. The Participatory Mapping Specialist will be a key resource around these issues. He or she will likely have a background in GIS, Geography, Computer Science or a related field and have some experience working on community-based participatory mapping projects. It is preferable to have knowledge of OSM and other open-source GIS tools, such as QuantumGIS.

#### Surveyors
The core of the project are the teams of surveyors, who perform the field data collection and data entry into the GIS application. They tend to be students, who may be studying geography/GIS or computer science and are quick to learn.

#### Occasional Roles
More complex projects may require additional help in operation management, M&amp;E, and communications. The OpenCities Toolkit has a description of additional roles in these areas.

### Activities

#### Setup
The initial stages of pilot center on the logistics of starting-up a new initiative. These activities include:

##### Contracting Incubation Space
Under its ToR with OpenDRI, the incubator/logistics company will work with the Project Lead to contract a work space. This office may be solely for use by the project, or more commonly, it may work with an existing innovation space or incubator to bring OpenDRI into a larger community of entrepreneurs and technologists. This latter option is preferable because it exposes the team to additional resources and provides a platform for building relationships, which is important for scaling the initiative.

##### Obtaining Equipment
The logistics company will need to purchase computers, GPS units, communications tools (radios/phones), and potentially, some office software (though most software needed is free and open source). The OpenDRI pilot management team will need to ensure that this equipment has a plan to ensure its security, and that any devices which go into the field have a basic sign-in and sign-out procedure. 

##### Hiring Staff
The OpenDRI trainers will likely already have the Project Lead under ToR from the Design phase. This management team will reach out to universities and other partners so that they can hire the rest of the staff. It is recommended that the pilot hold an event to raise awareness, recruit surveyors, and tell the story about what OpenDRI is doing.

##### Developing the questionnaire for field data collection
Based on the data model from the Design phase, the team will work with the Geomatics lead, local universities, local government champion, and other experts to develop the questionnaire that surveyors will use in the field. This document needs to be short, yet cover the necessary data for tens of thousands of buildings. It can be changed, but alterations affect how commensurate data will be between earlier and later versions, and may require resurveying large areas. Careful thought should go into this document. The OpenCities Toolkit has deeper levels of detail on how to build the questionnaire. 

#### Training
Once the space and staff are hired and ready for work, the pilot is ready for training in community mapping of exposure data. In general, this training will consist of the following skills:

* OpenStreetMap: how to enter data into the OpenStreetMap wiki.
* Field Survey Collection Techniques: how to use a GPS unit, paper maps, and field survey tools to collect data that can be entered into the OpenStreetMap database.  
* Exposure Mapping: how to examine a building and understand how its construction is exposed to natural hazards, including common signs of structural weakness.
* Questionnaire: a training to bring together how the questionnaire developed for the pilot related to OpenStreetMap, Field Survey Techniques, and Exposure Mapping.

The National Society for Earthquake Technology&ndash;Nepal has built a training manual to teach how to read a building for structural weaknesses (add link when approved).

#### Data Collection: Field Surveys and Mapping Parties
<div class="info-box image-right adapted width-200px">
<h4>Map Cakes: a tradition</h4>
<img src="/assets/images/mapcake.png" title="Risk Assessment Triad: Hazards, Exposure, Vulnerability" width="150">
<p>Mapping is a social activity. It can be very technical and tedious, but it should also be fun. For many years, large mapping parties have traditionally ended with map cakes, where the frosting is printed into a map that reflects the hard work of the team. The activity builds a sense of collective accomplishment. It also forms the core energy and network of relationships that allow for the project to scale. (more TBD, to interview Mikel)</p>
</div>

When surveyors have been trained, the pilot begins to collect data via mapping parties. These events organizing between 10-40 mappers to collect data in a specific region of a city, with the goal of being as comprehensive as is possible for that region. 

Mapping parties generally last several hours, depending on how long the team needs to travel from the work space to the area that needs to be surveyed.  If transportation is needed, the incubator/logistics company should arrange for rentals, drivers, or other arrangement suitable to context.

When teams return to the work space, they should enter their data into OpenStreetMap as a social activity, where experts can aid surveyors with questions about how to code specific attributes and answer any unexpected issues that emerge. More information can be found in the OpenCities Toolkit. This routine becomes the daily work for several months, until the goals of the pilot are reached.

#### Data Quality Assessment: Coverage, Accuracy, reviews with team
As the surveying teams progress, it is important that the geomatics lead work with local universities and other OpenDRI experts to assess the quality of the data that is being entered into OpenStreetMap. OSM novices often make mistakes, and this problem is amplified by the specificity required in the entry of exposure data. When a pattern emerges in the consistent miscoding of certain information, the management team should train volunteers around the issue. 

### Participatory Mapping: Troubleshooting politics and perceptions
Participatory mapping has been a technique for more the 20 years. It has a wide variance in the quality of work. Several national mapping agencies have reacted to poor quality of participatory mapping data, especially when those activities have not adhered to national or international standards for mapping data. the advent of OpenStreetMap has largely addressed the core concerns in this area. That said, OpenDRI team should work with the national mapping agencies to understand its standards and adhere as closely as possible to them.

***

## Backend (Behind the Scenes) Management Processes
While OpenDRI unfolds in the field, it sometimes requires backup from an international or regional office. These back-office processes include:

### Government Coordination
GFDRR or regional World Bank staff have good working relationships across a range of ministries. As the teams release more data into the GeoNode or collect more data into OpenStreetMap, clients will want to know how to harness the data for analysis and align the work with other strategic issues. GFDRR and Bank staff will work to alignment and planning for co-development/release of data around other projects.

### Linkages
As an OpenDRI pilot scales, the data will prove interesting to a wider range of actors, some of whom may wish to join the ecosystem and contribute their data sets. GFDRR and Bank staff will continue to connect the ecosystem of partners together and institutionalize practices across local and international efforts.

### Quality Assurance 
Scientists who perform risk assessment have high standards for the data they use in their models. GFDRR and World Bank staff will work with these scientists and perform an ongoing review of data as it is collected. The staff may commission studies from local or international universities and experts to gauge the accuracy of data.

***

## Outputs and Metrics
The pilot produces data and grow community. As a result, its output metrics center on these two issues.

### Data
* Coverage/Extent: what percent of the country's risk areas are reflected in the data sets?
* Vintage: how new is the data across the coverage of the country?

### Community
* Surveyors: how are the number of surveyors scaling over time? What turnover exists?
* Outputs: what is the productivity of the surveyors over time? What is the quality of that effort?
* Social Network: what is the shape and vector of the social network? Who are the supernodes?

