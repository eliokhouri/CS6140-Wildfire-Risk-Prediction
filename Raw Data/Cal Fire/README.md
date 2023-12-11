# CalFire README

This document serves as a guide for interpreting the various files and folders in the CalFire folder.


## File Definitions:

- **reformatCalFireData.ipynb**: All the python scripts used to process, modify and convert this data from raw data to the final product. Original csv file was downloaded from Cal Fire. Dates were reformatted from ISO format to separate year, month, day, hour, and minute ints. A subset of available features were selected.

- **CalFire_IncidentData_Reformatted.csv**: List of CalFire incidents reformatted to split the date time into separate columns, among other modifications found in the scripts. 

- **CalFire_IncidentData.csv**: The original CalFire incident dataset. 


## Folder Definitions:


## Custom Features in the Files or Generated

The following features are present in the CSV files or have been generated as part of data processing:

- **incident_name** (string): Name of the fire incident.
- **incident_created_year** (int): The year when the incident was reported.
- **incident_created_month** (int): The month when the incident was reported.
- **incident_created_day** (int): The day when the incident was reported.
- **incident_created_hour** (int): The hour when the incident was reported.
- **incident_created_minute** (int): The minute when the incident was reported.
- **incident_acres_burned** (int): Total area affected by the incident in acres.
- **incident_longitude** (float): Longitude coordinate of the incident location.
- **incident_latitude** (float): Latitude coordinate of the incident location.
- **incident_extinguished_year** (int): The year when the incident was extinguished.
- **incident_extinguished_month** (int): The month when the incident was extinguished.
- **incident_extinguished_day** (int): The day when the incident was extinguished.
- **incident_extinguished_hour** (int): The hour when the incident was extinguished.
- **incident_extinguished_minute** (int): The minute when the incident was extinguished.


## Credits

Cite this dataset when used as a source.

- **Source**: 
Cal FIRE. (2023). Current Emergency Incidents. Retrieved [October, 2023], from https://www.fire.ca.gov/incidents/

