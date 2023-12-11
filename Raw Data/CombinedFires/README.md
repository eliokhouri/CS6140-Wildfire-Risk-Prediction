# Combined Fires README

This document serves as a guide for interpreting the various files and folders in the Combined Fires folder.


## File Definitions:


- **CombineFires.ipynb**: Script used to combine fire information from the Cal Fire and the Kaggle fire datasets into combinedFires.csv, there was an overlap period from 2013-2015 that needed to be merged appropriately. 

- **combinedFires.csv**: The Kaggle and CalFire wildfire incidents in one file. The data is filtered so the output file contains only relevant features. CombineFires.ipynb also accounts for the two datasets overlapping from 2013 to 2015 to prevent duplication of incidents into the output file.


## Folder Definitions:


## Custom Features in the Files or Generated

- **incident_name**: Name of the wildfire incident.
- **incident_created_year**: Year when the wildfire incident was reported.
- **incident_created_month**: Month when the wildfire incident was reported.
- **incident_created_day**: Day when the wildfire incident was reported.
- **incident_created_hour**: Hour when the wildfire incident was reported.
- **incident_created_minute**: Minute when the wildfire incident was reported.
- **incident_acres_burned**: Total area affected by the wildfire, measured in acres.
- **incident_longitude**: Longitude coordinate of the wildfire incident.
- **incident_latitude**: Latitude coordinate of the wildfire incident.
- **incident_extinguished_year**: Year when the wildfire incident was extinguished.
- **incident_extinguished_month**: Month when the wildfire incident was extinguished.
- **incident_extinguished_day**: Day when the wildfire incident was extinguished.
- **incident_extinguished_hour**: Hour when the wildfire incident was extinguished.
- **incident_extinguished_minute**: Minute when the wildfire incident was extinguished.


## Credits

Cite this dataset when used as a source.

- **Source**: 
Citations for individual sources Kaggle, CalFire are in their respective README files.








