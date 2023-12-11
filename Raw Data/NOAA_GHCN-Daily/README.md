# NOAA_GHCN README

This document serves as a guide for interpreting the various files and folders in the NOAA_GHCN folder.

## File Definitions:

- **retrieveData.ipynb**: Script used to retrieve data for the California weather stations using Amazon S3 bucket.

- **reformatGHCNFiles.ipynb**: Script used to reformat the data from raw data (S3) to the final product used in our combined dataset. We had to apply the script below to do one final round of filtering and converting. 

- **filterAndChangeUnitGHCNFiles.ipynb**: Script used to convert metric measurements to imperial measurements in order to match LCD files. 

The files below serve as inventory files, our raw data folder contain files with measurements, our scripts use these inventory files to find station ids, locations and elevations so that we can target the appropriate raw data file (i.e. the station closest to our wildfire incident).

- **melio-ca-stations-2013-2023.csv**: All California weather stations with latitude, longitude and elevation, 2013-2023 (-999 value indicates missing measurement). 

- **melio-ca-stations.csv**: All California weather stations with latitude, longitude and elevation (-999 value indicates missing measurement).

- **ghcnd-inventory.txt**: All Caifornia GHCN stations, used to filter for only stations measuring PRCP from 2013 - 2023 (641 count).

- **ghcnd-stations.txt**: All GHCN stations globally, used to find the ID's of California stations.


## Folder Definitions:

- **ca-2013-2023-station-data**: 641 California weather station files containing meteorological measurements.

- **ca-2013-2023-station-data-reformatted**: 641 California weather station files containing meteorological measurements, reformatted from their original form.

- **ca-2013-2023-station-data-reformatted-filtered-units-converted**: 641 California weather station files containing meteorological measurements, reformatted from their original form and converted and filtered further.


## Custom Features in the Files or Generated

- **YEAR** (int): Year of the weather observation.
- **MONTH** (int): Month of the weather observation.
- **DAY** (int): Day of the weather observation.
- **PRCP** (float): Precipitation, measured in tenths of a millimeter.
- **SNOW** (float): Snowfall, measured in millimeters. This feature may be blank.
- **SNWD** (float): Snow depth, measured in millimeters. This feature may be blank.
- **TMAX** (float): Maximum temperature, measured in degrees Celsius.
- **TMIN** (float): Minimum temperature, measured in degrees Celsius.
- **ADPT** (float): Average dew point temperature, measured in hectopascals times ten.
- **AWBT** (float): Average wet bulb temperature, measured in degrees Celsius.
- **AWND** (float): Average wind speed, measured in tenths of meters per second.
- **EVAP** (float): Water evaporation from a pan, measured in tenths of a millimeter.
- **FMTM** (int): Time of fastest mile wind speed, in HHMM format.
- **FRGB** (float): Frozen ground bottom, measured in centimeters.
- **FRGT** (float): Frozen ground top, measured in centimeters.
- **FRTH** (float): Frozen ground height/thickness, measured in centimeters.
- **RHAV** (float): Average relative humidity, measured in percent.
- **RHMN** (float): Minimum relative humidity, measured in percent.
- **RHMX** (float): Maximum relative humidity, measured in percent.
- **TAVG** (float): Average temperature, measured in degrees Celsius.


## Credits

Cite this dataset when used as a source.

- **Source**: 
Menne, Matthew J., Imke Durre, Bryant Korzeniewski, Shelley McNeill, Kristy Thomas, Xungang Yin, Steven Anthony, Ron Ray, Russell S. Vose, Byron E.Gleason, and Tamara G. Houston (2012): Global Historical Climatology Network - Daily (GHCN-Daily), Version 3. [California Data]. NOAA National Climatic Data Center. doi:10.7289/V5D21VHZ [October, 2023].

Matthew J. Menne, Imke Durre, Russell S. Vose, Byron E. Gleason, and Tamara G. Houston, 2012: An Overview of the Global Historical Climatology Network-Daily Database. J. Atmos. Oceanic Technol., 29, 897-910. doi:10.1175/JTECH-D-11-00103.1.
