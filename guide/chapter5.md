---
layout: guide
navgroup: guide
group: guidechapter
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

The piloting phase builds the first instances of a data catalogue, collects the first participatory mapping data, and convenes the Open Data Working Group to review policy issues around the new data.

***

## Objectives
The primary objective of a pilot is to open the imagination of the partners to what is possible when they share data about risk. The pilot provides a tangible use case to focus the efforts of multiple organizations on building the various parts of an open data ecosystem, some of which may be inside of government, some of which may be fully public. In some cases, the pilot provides in impetus to get over "last mile" problems, where partners have already made great strides towards building risk data but are prevented from launching their work by a mix of problems that often were discovered only by engaging with the task.  

***

## Bottom Up Strategy
OpenDRI does not require a client country to start a "whole of government" open data program. However, it requires a significant commitment to release data in a narrow band of areas about natural hazards, the built environment, and the threats that disasters pose to a society. The work from the bottom up will build up the proof that this kind of data can be released in open formats on open platforms. There are two parts to this approach:

1. **Data Collation and Release**. A process with the Open Data Working Group and the GeoNode that centers on obtaining access to existing datasets and then preparing them for release.
2. **Data Collection and Release**. A process that center on the collection of data about the built environment and its exposure to the natural hazards of the place. Community mapping is one tactic in this area and the main focus of this guide, though other partners will add to these approaches.

### 1. Data Collation
Collating the right data is the key to keeping the project focused on solving problems around the DRM cycle. In general, OpenDRI data will have two attributes:

1. It will be **geospatial**, with geographic attributes that describe some aspect of the human systems and built environment and the hazards that may affect people and infrastructure.
2. It will be in **open data formats** and compliant with [Open Geospatial Consortium (OGC)](http://www.opengeospatial.org/) standards.

#### Install a platform for data collection
The first step in each OpenDRI engagement has been to create a place where data can be shared. This space is meant to be neutral: a place where the data is legally and technically open for use by all (or at least those who have access to it). In a few cases, this space has solely been OpenStreetMap. In most cases, client ministries wish to have a data catalogue where they can upload datasets that are meant to be opened. The [process for building these data catalogues](datacatalogue.html) is described in the Methods section.

#### Focus on the use case
When the government of Malawi built a pilot instance of OpenDRI, it focused efforts on one hazard in a single region: flooding in the lower Shire valley. This effort enabled multiple ministries to collect and prepare data related to meteorology, climate change, and geospatial analysis for upload into a GeoNode. In the initial pilot, the focus excluded data related to other hazards, but enabled ministry officials at the national and regional levels to learn how to work in an open data ecosystem.

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

### Develop a Plan for Data Access
The partners must also decide on who can have access to the data and under what terms. For data to be open, it needs to be licensed so that it can be capable of being redistributed, so that it can be turned into derived works that reuse the original data. Getting to this point is often a process:

1. **Manual Interagency Sharing**: government agencies transfer data on a case-by-case basis using *ad hoc* means.
2. **Internal Government Data Catalogue Network**: government agencies exchange data using a confederation of data catalogues and web services.
3. **Open Government Data**: one-way sharing of government data to the public, sometimes via specific authorizations for specific individuals.
4. **Open Linked Data**: the government and public participate in a data commons, where everyone exchanges data.

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

## Top Down Strategy
The space for OpenDRI to develop pilots requires coordination and communication between the various ministries and partners. This process is relationship intensive: it requires building trust through consistent contact as well as the delivery of small bits of data across previously unscalable boundaries. The chief ally for this work is the Open Data Working Group and the country offices of the DRM project managers (TTLs) that OpenDRI is supporting.

### Open Data Working Group
(this is an area where we need to explore additional cases around how OpenDRI works with ODWG to develop its policies)

### DRM Project Managers
(this is an are where we need additional data. What are the key lessons learned from developing the pilot with the DRM team in a region or country? What do they need to know on a weekly or monthly basis)?

### Reporting Strategy
OpenDRI has developed monthly progress reports to keep partners informed about what data is being collected and released. It provides a summary of the key achievements, a table of the latest data summary figures and participation numbers, as well as an area for lessons learned and future plans. The format may be found here: [Progress Report Template](reports/progressreport.html).


***

## Who

### Open Data Working Group

### Community Mapping Efforts

### Data Curators

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

## Context
In early 2012, the World Bank's South Asia Region (SAR) engaged in the project with Nepal's Ministries of Education and Health to retrofit schools and health facilities against seismic risks in the Kathmandu valley. The prioritization of this investment required knowing both where these facilities were located and the relative exposure of these structures to earthquakes. When the teams could locate a comprehensive list of schools or health facilities to begin their risk assessment, they turned to the GFDRR team that was working on OpenDRI.

## Scoping
Through a series of meetings, GFDRR introduced SAR and the GoN to the work that OpenStreetMap had done in Indonesia under AIFDR as well as the OSM efforts in the Kotse Valley with the American Red Cross. Based on the need to collect high-resolution data about more than 10,000 buildings in Kathmandu, SAR and the GoN worked with GDRR to fund an OpenStreetMap effort to map every school and health clinic in Kathmandu. In the process, SAR and GFDRR agreed to create the first site in a new OpenCities Project, where open data and efforts like OpenStreetMap would be used to catalyze better urban planning.

## Design
(will write prose around final form of the chapter)

### Key Personnel and Partnerships
* Three consultants: PM (Robert), OSM Consultant (Nama), KM (Ryan)
* NSET for structural engineering. 
* University for students. 
* Biruwa for incubation space.

### Community Mapping/Field Data Collection
* started without a list of schools
* 13 interns plus 350 active volunteer mappers.
* divided city into 4 quadrants. Used mapmyschool.org along with questions in each neighborhood to locate schools and health facilities not on any list.
* collected data (show graph of progress from reports)
* created linkages: NSET, USAID, ICIMOD. OpenDataDay. 

### Data Quality
In first three months, collected over 65,000 building footprints with over 350 active mappers. Required checking for accuracy.

#### NSET
NSET reviewed a sampling of small percentage of the buildings surveyed by the volunteers. They flagged issues to adjust training, and then provided that training to volunteers. It helped to taking pictures of every building along the way, enabling engineers to review both photos and forms.

#### UCL
Similar to UGM study from Indonesia, worked with Muki Hakley, who gave advice to the Geomatics Dept on Kath Univ on assessment of geometry of data and fitness of use. Reviewed the accuracy of building footprints, road networks (where roads overlap.

### Demonstrated Capacity
Data collected by mappers demonstrated the potential for open data to GoN as well as USAID. (get more)

