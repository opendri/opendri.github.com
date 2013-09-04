---
layout: guide
navgroup: guide
group: guidechapter
pagetype: core

title: 6. Scaling
excerpt: "xx"
abstract: "Field Guide"
section: II. Practice
category: guide
---
{% include JB/setup %}

# 6. Scaling
<div class="info-box image-right adapted width-200px">
<h4>Phase Summary</h4>
<ul>
<li>Timeline: ?? months</li>
<li>Costs: ?</li>
</ul> 
</div>

Pilots demonstrate new possibilities. They allow partners to see firsthand how cost effective, fast, and comprehensive an OpenDRI engagement can be. Pilots can also expose challenges of the local context. Data may be difficult to obtain or data sets may require very time-intensive work to prepare it for release. In either case, there will emerge a point where the partners to OpenDRI will discuss whether to scale the initiative and where the strategic areas of expansion might be.

(note to partners: we are hoping to expand this section with additional practices and ideas)

***

## Objectives
The effort to scale OpenDRI pilots is often a matter of replicating the structure of the original pilot in additional locations, rather than increasing the size of a single pilot. This approach is congruent with typical semantic web (Web 3.0) institutions, which tend to follow "small pieces, loosely joined" organizational designs of both information technology industries (and the textile manufacturing industry, where the process of moving a garment from raw material to finished good may have a route through dozens of companies in several countries). 

<div class="info-box image-right adapted width-200px">
<h4>Small Pieces, Loosely Joined</h4>
<p>BCG paper on small pieces, loosely joined.</p>
</div>
.

***

## 1. Collating Data
After early adopters have added data to a data catalogue, the slow process of building a network of users begins. The sign for this work to start is if a Data Curator and partners have loaded data and a user base begins to *use* the data catalogue to solve immediate problems. The usage indicates that the pilot happened in a fertile environment for additional work. 

In general, there are three approaches to scaling open government risk data:

* **Expanding the number of data catalogues**. Data catalogues no longer need to be centralized. Instead, they can form a confederation of catalogues. In this way, each ministry can own and curate its own data, and choose what data to make available to whom. The confederation of catalogues might offer other ministries very different access rights than the rights afforded to the general public.

* **Increasing data sets within each data catalogue**. Often the initial data sets are limited to information which is considered to be low risk and high reward for its release. Expanding the data available in each catalogue will work towards data which might have lower rewards or higher risks for its release.

* **Increasing interconnections**. The density of the interconnections between data will greatly affect the perceived value of the network. Each data set can be viewed as a LEGO&trade; piece. When topography data from one ministry can be combined with meteorological forecasts and river gauge data, flood models can more accurately predict flood damage from an upcoming storm seasons. 

In each case, planning how to scale requires considering several factors:

* **Meeting the use cases of partners**. The availability of data often exposes new use cases, many of which may have additional data needs. The Open Data Working Group and Data Curator can explore which uses meet their priorities and decide which direction to take the additional effort. 

* **Building relationships with gatekeepers to other data sets**. Data catalogues often become gravity wells for information: they pull others with data toward growing supernodes. This credibility enables the OpenDRI to locate islands of data which may be considered core to DRM, but may be held outside of government (often survey or GIS firms). Negotiating the release of these data sets has sometimes proven to be relatively easy when there is a place to host the data without cost to the gatekeepers.

#### International Interconnection
The partners to this guide are actively seeking to build connections between national data sets around DRM with the datasets used by others in disaster risk reduction, disaster risk management, and disaster response operations. These partners have built (or are building) data catalogues that may augment national efforts. It may also be in a client nation's interest to ensure that the data used in these international data catalogues is aligned with the data collected via OpenDRI and other approaches to open data run by client nation ministries. 

<div class="info-box image-right adapted width-200px">
<h4>International Data Catalogues</h4>
<ul>
<li><strong>OCHA</strong> is building a database of 100 indicators for every country in the world.</li>
<li><strong>UNDP</strong> has built a data catalogue around DRR: insert link and short description.</li>
<li><strong>UNISDR</strong> has built a data catalogue around DRR: insert link and short description.</li>
</ul> 
</div>
.

*** 

## 2.  Collecting Data
Research indicates that scaling the efforts to collect data (e.g. via community mapping) is generally a process of building additional pilots then interconnecting them. This strategy roughly parallels grassroots organizing, when organizers carry the effort from one place to the next, building a larger national effort along the way.

### Expanding each site
Each new pilot will generally start by cloning the previous cities, with customizations to context. Some areas of customization include architectural traditions of a particular city, natural hazards in the specific place, language, and custom. The organizational design will be similar: incubator plus facilitator and related staff. In general, community mapping efforts have scaled by cloning without problem.

### Preparing pilots be sustainable entity
The more difficult part of community mapping with volunteers is converting a pilot into a sustainable entity. The communities that come together to collect exposure data are not meant to be a one-off. They must curate that data over time to create a viable risk management ecosystem. While the costs are low, these organizations need to sustain a small set of paid leaders around a network of volunteer surveyors. The OpenDRI team needs to consider strategies to fund and sustain these efforts. To date, all pilots are still working off pilot funding and none have developed revenue models in either the not-for-profit or for-profit spaces. Some groups might well be able to develop social ventures/social entrepreneurship models. (editor's note: look to advice of partners here.)

An important element of current work is partnerships with local universities. By integrating risk assessment into the curricula of geospatial and structural engineering courses, the OpenDRI team has been able to expose the next generation of government officials, engineers, and analysts to thinking about risk in terms of probable futures. Students have become an important source of volunteers, especially as they seek to gain experience in a new set of skills.

### Data Authority and Quality
Because data collected from community mapping is collected using methods from participatory mapping, traditional GIS professionals need to see proof of the accuracy of the data. They want to know that the data is reliable and to know where it is inaccurate (all data has errors, the trick is controlling for those inaccuracies). OpenDRI team has had success contracting with local academic institutions to perform a QA study on community mapping data. One [such report was done by UGM in Indonesia](http://oo.or.id/2013-07-05/Dokumen%20Laporan/Final%20Report-OSM%20Evaluation%20in%20Indonesia_2012.pdf). It catalyzed a change to the conversation about community mapping in the client government, which subsequently expanded its use of OpenStreetMap. University College, London and Kathmandu University performed a similar study for the community mapping work in Nepal. 

*** 

## 3. Creating Policies to manage linked open data
When ministries begin sharing data that has previously been closed, policy and legal question often arise. Some of these issues center on access, privacy, and standards. The OpenDRI team will need consider several questions:

<div class="info-box image-right adapted width-200px">
<h4>US Metadata standards</h4>
<p>When the US created an open data policy, its Office of Management and Budget was tasked with building a set of metadata standards that all US federal agencies would need to follow. The <a href="http://project-open-data.github.io/schema/">Common Core Metadata standards are now available on GitHub.</a></p>
</div>

* **Access**. *Who can view the data?* Do some data need to be kept private for security reasons (such as some data about nuclear power plants)? 
* **Privacy**. *What the data alone or as a mosaic reveals about others?* Do the data reveal information about citizens that needs to be kept private? How can the data be released for DRM purposes in ways that protect citizen privacy? 
* **Standards**. *What is the national standard for certain data types?* Do ministries use formats that are compatible with each other? What is the cost of translating data from one format to another as it now moves from ministry to ministry and outside partners? If there are problems with standards and data translation, what is the standard that the nation will follow? 
* **Metadata**. *How can users find the data they need?* Metadata provides a common language to describe the data. In this way, experts in various specialties can define their vocabularies and enable others to find the data that they need.

### Building Curation capacity and QA/M&amp;E
As data scales in size and interconnection, the challenges of curating it increase. When a system is flooded with high volumes of poor quality data, it becomes far less useful than it was when it started with a few solid datasets. The Data Curator needs to become the steward of the data. He or she will not only add new data, but also removing data that has become stale, cleanse data that contains errors in accuracy or formatting. The Data Curator will need to establish and apply data typologies and hierarchies. The Data Curator's role is to leave data better than he or she found it. The Quality Assurance capacity and M&amp;E around OpenDRI need to be tied to the quality, findability, and usage of the data under curation. OpenDRI is developing a [guide to this curation process](datacuration.html).

### Community Mapping Standards and Certification
To be most useful to national mapping agencies, the data from community mapping needs to follow standard methods. One approach to ensuring this standardization is through certification of community mapping organizations. The national mapping agency in Indonesia (BIG), has recommended the creation of a set of certifications around community mapping. This effort should be tracked and evaluated for its effect on the quality of data. Areas of concern for a national mapping agency include:

* **Providing Access to Imagery and Base Information**. When volunteers start from imagery and existing trusted data, they tend to be more accurate in their mapping than when they start from scratch. National mapping agencies are beginning to find ways to provide imagery and data under license to community mapping groups. See the [US State Department Humanitarian Information Unit Imagery to the Crowd](http://hiu.state.gov/ittc/). 

* **License Guidelines**. Data received from community mapping needs to be under a license that allows the national mapping agency to redistribute the data and turn data into derivative works.

* **Certification Process**. Community mapping organizations can participate in trainings that enable them to become certified by the national mapping agency in the standards that geospatial data must follow in the country. The national mapping agency can also observe a community mapping organization's training program and certify that these methods are teaching approved standards and generating usable data.

* **Pilots and Experiments**. National mapping agencies often lack a safe place to try new methods, including community mapping. Pilots and experimentation programs with universities offer a way that different approaches, standards, and technologies can be tried in a field environment at low cost.

### Training Local Officials in the Use and Extension of OpenDRI
Local officials working in DRM or disaster management are often starved for good data. It is also common to find that their geospatial analysis capability is a single consultant who holds onto the data for job security. Providing these officials with training in how to make use of OpenDRI data&mdash;especially with usable tools like InaSAFE&mdash;gives them a new set of capabilities. It also opens their mind to thinking beyond traditional approaches to DRM and exposes them to probabilistic thinking, scenario planning, and data sharing with a larger ecosystem of local officials. 

***

### 4. Catalyzing efforts around the use of the data
Growing the network of individuals and analysts who use OpenDRI data is an important approach to increasing the volume and quality of DRM data available in the client nation. In some cases, the data will generate unexpected synergies. Entrepreneurs have used street map data to build smart-phone apps around transportation, logistics, and other location-based services&mdash;none of which relate directly to DRM. Universities have found that the data is a ripe target for research not only in GIS, but also in social and physical sciences. 

### Entrepreneurs
A proven approach to catalyzing entrepreneurial activity around OpenDRI data is to co-locate the OpenDRI in an incubator for local technology community. When community mappers work in the same space, entrepreneurs can discover not only how rich the OpenDRI data is, but also learn how to integrate their software with the open data services offered by OpenDRI. 

(Include UNICEF case as well as Nepal)

### University Partnerships
Universities train many of the geospatial professionals, government officials, and scientists who will be using OpenDRI data. GFDRR has found great success working with local professors. Training programs for OpenDRI can be given to universities to integrate into their courses, and data access provides students and faculty with a rich source of information to explore through research in graduate programs. In turn, the community of young professionals continues to expand the mental model of thinking in terms of risk management, providing a stable source of critical thinkers in the future.

***

## Case: Indonesia: Mapping Jakarta for $20,000 USD
In 2010, GFDRR Labs formed a working partnership with an AusAID and Government of Indonesia initiative known as the Australia-Indonesia Facility for Disaster Reduction (AIFDR) with the goal of applying innovation and technology to the challenges of disaster risk management. AIFDR seconds technical specialists from Geoscience Australia to increase Indonesia's national disaster management agency's (BNPB) capacity to use risk information for disaster preparedness, including a free and open source platform called InaSafe. Because Indonesia needed higher resolution exposure data to engage in systematic planning around a wide range of natural hazards, AIDFR contracted with the Humanitarian OpenStreetMap team to engage in a community mapping pilot in Pedang in 2011.

### Pedang project with AIFDR
Over the course of 18 months, HOT trained (x) mappers and put 250,000 buildings on the map for $200K, including the development of training materials, their translation into Bahasa, and the development of a several software tools that greatly simplified the OpenStreetMap interface for volunteers. Despite the quality and quantity of data, the GoI remained skeptical about its accuracy. Participatory mapping had a long history in Indonesia; much of the data was collected on paper using techniques that made it understandable from the eyes of a local population, but lacked rigor and standardization necessary to bring those data into a national map. Crisis soon changed this situation. 

(note: put in a comment about sustainability of mapping competitions?)

### Mapping Jakarta for $20,000
In 2012, the monsoon forecast indicated that the province of Jakarta was at high risk for a greater intensity of flooding than usual. The governor of Jakarta asked his team for a risk assessment and plan of action. After being limited by existing data, the provincial disaster management authorities (under the national disaster management agency, BNBP) asked AIFDR and the World Bank to support a community mapping project, scaling the work from Pedang to all five cities in Jakarta. 

The governor enlisted the support of the 5 mayors, who asked more than 200 ward chiefs to work with the community mapping effort. Through several mapping parties, the volunteers trained by the Humanitarian OpenStreetMap Team worked in pairs with the ward chiefs in a process that has since been named co-mapping. This method couples an experienced community mapper with a non-technical representative of local government. Together, they add attributes to geographic features on paper maps, which are then turned into digital geospatial information, printed back out, and authorized (by signature) by the ward chief. The process lends additional authority to the map.

<div class="info-box image-right adapted width-200px">
<h4>Unexpected Benefits</h4>
<p>Indonesian law limits the ability of the national mapping agency to release official boundaries of wards (Admin 4 or 5) without the authorization of the ward chief. The co-mapping process was the first method that BIG found that met the requirements of the law. The data generated from Jakarta has since come under review for release as official Admin4 and Admin5 boundaries by BIG.</p>
</div>

For less than $20K, the effort mapped most of Jakarta. Indonesia now has over 1 million buildings in OpenStreetMap. The National Mapping Agency (BIG) has developed standards for the way that such data must be collected, tagged, and licensed to the government. And BNBP officials worked with AIFDR to develop InaSAFE as a risk communication tool that allows local officials--including those in Jakarta--to perform basic scenario analysis of using the OpenStreetMap data and web services on hazards and vulnerability prepared by AIFDR and Geoscience Australia. 
