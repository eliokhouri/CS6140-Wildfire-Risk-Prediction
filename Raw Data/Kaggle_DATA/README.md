# Kaggle_Data README

This document serves as a guide for interpreting the various files and folders in the Kaggle_DATA folder. This dataset offers a comprehensive record of wildfires that occurred in the United States from 1992 to 2015. It provides support for the national Fire Program Analysis (FPA) system with data integrated from federal, state, and local fire organizations. The dataset aims to meet core data element requirements such as the date of discovery, final fire size, and precise location for inclusion. Efforts have been made to align the data with the National Wildfire Coordinating Group (NWCG) standards, enhancing data quality by addressing errors and redundancies. The dataset, known as the Fire Program Analysis fire-occurrence database (FPA FOD), contains over 1.88 million geo-referenced records and covers approximately 140 million acres affected by fires over a span of 24 years.


## File Definitions:

There are no scripts in this folder, all of the modifications were performed within the SQLite database using SQLite commands. Similar modifications to the other datasets were performed using SQLite including: feature selection, feature engineering of dates and feature conversion to match the metrics of the other datasets. 

- **california_fires_mod.csv**: The modified list of California wildfire incidents from the SQLite database.

- **california_fires**: Misc. sheet used to view the data. 


## Folder Definitions:


## Custom Features in the Files or Generated

The primary table in the SQLite database is named 'Fires', which contains the following columns relevant to the data extracted:

- `FIRE_NAME`: Name of the fire incident.
- `DISCOVERY_YEAR`: Year the fire was discovered or confirmed.
- `DISCOVERY_MONTH`: Month the fire was discovered or confirmed.
- `DISCOVERY_DAY`: Day the fire was discovered or confirmed.
- `DISCOVERY_HOUR`: Hour of the day the fire was discovered or confirmed.
- `DISCOVERY_MINUTE`: Minute of the hour the fire was discovered or confirmed.
- `STAT_CAUSE_DESCR`: Description of the statistical cause of the fire.
- `CONT_YEAR`: Year the fire was contained or controlled.
- `CONT_MONTH`: Month the fire was contained or controlled.
- `CONT_DAY`: Day the fire was contained or controlled.
- `CONT_HOUR`: Hour of the day the fire was contained or controlled.
- `CONT_MINUTE`: Minute of the hour the fire was contained or controlled.
- `FIRE_SIZE`: Estimated size of the fire in acres.
- `LATITUDE`: Latitude of the fire location in decimal degrees.
- `LONGITUDE`: Longitude of the fire location in decimal degrees.
- `STATE`: The state where the fire occurred.

This data subset provides a streamlined view focusing on the temporal and spatial aspects of fire incidents, offering a clear perspective for analysis.


## Credits

Cite this dataset when used as a source.

- **Source**: 
This data is provided by the U.S. Government and is available for public use without restrictions. When utilizing this dataset in research or presentations, please cite as follows:
Short, Karen C. 2017. Spatial wildfire occurrence data for the United States, 1992-2015 [FPA_FOD_20170508]. 4th Edition. Fort Collins, CO: Forest Service Research Data Archive. https://doi.org/10.2737/RDS-2013-0009.4


## Inspiration
With this dataset, one could explore questions such as:

- Trends over time in wildfire occurrences.
- Geographic patterns in wildfire frequency and severity.
- Prediction models for wildfire causes based on date, location, and size.

