# Local Climatological Data (LCD) README

This document serves as a guide for interpreting the various files and folders in the Local Climatological Data (LCD) LCD_STATION_DATA folder.


## File Definitions:


- **Data_mining_notebook_LCD.ipynb**: All the python scripts used to retrieve, mine, process, modify and convert this data from raw data to the final product. 

The files below serve as inventory files, our raw data folder contain files with measurements, our scripts use these inventory files to find station ids, locations and elevations so that we can target the appropriate raw data file (i.e. the station closest to our wildfire incident).

- **LCD_ALL_STATIONS_ALL_INFO.csv**: Comprehensive list of all 151 stations with name, location and elevation included.

- **LCD_MY_STATIONS_ALL_INFO.csv**: Comprehensive list of the 139 relevant stations with name, location and elevation included. From the 151 stations, we drop down to 139 due to time constraints where certain stations do not have recent measurements.

- **LCD_MY_STATION_DIFFERENCES.csv**: Log of the stations we drop from the 151 stations to the 139 due to time constraints where certain stations do not have recent measurements.


## Folder Definitions:

- **Raw_data_download_mod**: This folder contains all the 139 stations that record weather measurements in conjunction with the dates of our fire data, in other words around 10 stations were dropped due to no a lack of recording up to the present day. Raw data files were also modified through feature selection, and feature engineering on the dates and station ids (dates were split into year, month, day, hour, minute and ids were stripped from the extended station identification column).  

- **Raw_data_download_mod_preprocessed**: This folder contains all the 139 stations, processed from the `Raw_data_download_mod` folder. It includes preprocessing steps to remove mixed data types.

- **Raw_data_download_mod_preprocessed_converted**: This folder contains all the 139 stations, processed from the `Raw_data_download_mod_preprocessed ` folder. It includes conversion steps to transform the hourly and sub-hourly intervals to daily intervals. This processing generates additional features such as mean, mode, min, max, etc., for more comprehensive analysis.


## Data Columns Definitions (The original LCD features):

- **STATION**: The unique identifier for the weather station.
- **DATE**: The date of the weather observation.
- **REPORT_TYPE**: The type of report, indicating the data collection interval.
- **SOURCE**: The source identifier for the data.
- **AWND**: Average Wind Speed.
- **BackupDirection**: The direction of the backup wind measurement.
- **BackupDistance**: The distance to the backup measurement station.
- **BackupDistanceUnit**: The unit of measure for Backup Distance (e.g., miles, kilometers).
- **BackupElements**: Elements included in the backup observation.
- **BackupElevation**: The elevation of the backup observation site.
- **BackupElevationUnit**: The unit of measure for Backup Elevation (e.g., feet, meters).
- **BackupEquipment**: Equipment used for backup measurements.
- **BackupLatitude**: The latitude of the backup observation site.
- **BackupLongitude**: The longitude of the backup observation site.
- **BackupName**: The name of the backup observation site.
- **CDSD**: Cooling Degree Days Season to Date.
- **CLDD**: Cooling Degree Days.
- **DSNW**: Days with Snow.
- **DYHF**: Daily record of the highest temperature.
- **DYTS**: Daily record of the lowest temperature.
- **DailyAverageDewPointTemperature**: The daily average dew point temperature.
- **DailyAverageDryBulbTemperature**: The daily average temperature measured by a dry bulb.
- **DailyAverageRelativeHumidity**: The daily average relative humidity.
- **DailyAverageSeaLevelPressure**: The daily average sea-level pressure.
- **DailyAverageStationPressure**: The daily average station pressure.
- **DailyAverageWetBulbTemperature**: The daily average wet bulb temperature.
- **DailyAverageWindSpeed**: The daily average wind speed.
- **DailyCoolingDegreeDays**: The number of cooling degree days for the day.
- **DailyDepartureFromNormalAverageTemperature**: The departure from the normal average temperature for the day.
- **DailyHeatingDegreeDays**: The number of heating degree days for the day.
- **DailyMaximumDryBulbTemperature**: The maximum dry bulb temperature for the day.
- **DailyMinimumDryBulbTemperature**: The minimum dry bulb temperature for the day.
- **DailyPeakWindDirection**: The direction of the peak wind speed for the day.
- **DailyPeakWindSpeed**: The peak wind speed for the day.
- **DailyPrecipitation**: The total precipitation for the day.
- **DailySnowDepth**: The snow depth for the day.
- **DailySnowfall**: The snowfall amount for the day.
- **DailySustainedWindDirection**: The direction of the sustained wind for the day.
- **DailySustainedWindSpeed**: The sustained wind speed for the day.
- **DailyWeather**: A summary of the daily weather conditions.
- **HDSD**: Heating Degree Days Season to Date.
- **HTDD**: Heating Degree Days.
- **HourlyAltimeterSetting**: The hourly pressure adjusted for altitude.
- **HourlyDewPointTemperature**: The hourly dew point temperature.
- **HourlyDryBulbTemperature**: The hourly temperature measured by a dry bulb.
- **HourlyPrecipitation**: The total hourly precipitation.
- **HourlyPresentWeatherType**: The type of weather present during the hour.
- **HourlyPressureChange**: The change in atmospheric pressure during the hour.
- **HourlyPressureTendency**: The trend in atmospheric pressure over the hour.
- **HourlyRelativeHumidity**: The hourly relative humidity percentage.
- **HourlySeaLevelPressure**: The hourly atmospheric pressure reduced to sea level.
- **HourlySkyConditions**: The description of the sky conditions for each hour.
- **HourlyStationPressure**: The hourly atmospheric pressure at the station.
- **HourlyVisibility**: The visibility distance for each hour.
- **HourlyWetBulbTemperature**: The hourly temperature measured by a wet bulb.
- **HourlyWindDirection**: The hourly wind direction.
- **HourlyWindGustSpeed**: The speed of the hourly wind gusts.
- **HourlyWindSpeed**: The hourly wind speed.
- **MonthlyAverageRH**: The monthly average relative humidity.
- **MonthlyDaysWithGT001Precip**: The number of days in a month with greater than 0.01 inches of precipitation.
- **MonthlyDaysWithGT010Precip**: The number of days in a month with greater than 0.10 inches of precipitation.
- **MonthlyDaysWithGT32Temp**: The number of days in a month with temperatures above 32°F.
- **MonthlyDaysWithGT90Temp**: The number of days in a month with temperatures above 90°F.
- **MonthlyDaysWithLT0Temp**: The number of days in a month with temperatures below 0°F.
- **MonthlyDaysWithLT32Temp**: The number of days in a month with temperatures below 32°F.
- **MonthlyDepartureFromNormalAverageTemperature**: The monthly departure from normal average temperature.
- **MonthlyDepartureFromNormalCoolingDegreeDays**: The monthly departure from normal cooling degree days.
- **MonthlyDepartureFromNormalHeatingDegreeDays**: The monthly departure from normal heating degree days.
- **MonthlyDepartureFromNormalMaximumTemperature**: The monthly departure from normal maximum temperature.
- **MonthlyDepartureFromNormalMinimumTemperature**: The monthly departure from normal minimum temperature.
- **MonthlyDepartureFromNormalPrecipitation**: The monthly departure from normal precipitation levels.
- **MonthlyDewpointTemperature**: The monthly average dew point temperature.
- **MonthlyGreatestPrecip**: The greatest amount of precipitation recorded in a month.
- **MonthlyGreatestPrecipDate**: The date of the greatest precipitation recorded in a month.
- **MonthlyGreatestSnowDepth**: The greatest snow depth recorded in a month.
- **MonthlyGreatestSnowDepthDate**: The date of the greatest snow depth recorded in a month.
- **MonthlyGreatestSnowfall**: The greatest snowfall recorded in a month.
- **MonthlyGreatestSnowfallDate**: The date of the greatest snowfall recorded in a month.
- **MonthlyMaxSeaLevelPressureValue**: The maximum sea-level pressure value for the month.
- **MonthlyMaxSeaLevelPressureValueDate**: The date of the maximum sea-level pressure for the month.
- **MonthlyMaxSeaLevelPressureValueTime**: The time of the maximum sea-level pressure for the month.
- **MonthlyMaximumTemperature**: The maximum temperature recorded in a month.
- **MonthlyMeanTemperature**: The mean temperature for the month.
- **MonthlyMinSeaLevelPressureValue**: The minimum sea-level pressure value for the month.
- **MonthlyMinSeaLevelPressureValueDate**: The date of the minimum sea-level pressure for the month.
- **MonthlyMinSeaLevelPressureValueTime**: The time of the minimum sea-level pressure for the month.
- **MonthlyMinimumTemperature**: The minimum temperature recorded for the month.
- **MonthlySeaLevelPressure**: The monthly average sea-level pressure.
- **MonthlyStationPressure**: The monthly average station pressure.
- **MonthlyTotalLiquidPrecipitation**: The total liquid precipitation for the month.
- **MonthlyTotalSnowfall**: The total snowfall for the month.
- **MonthlyWetBulb**: The monthly average wet bulb temperature.
- **NormalsCoolingDegreeDay**: Normal cooling degree days based on a long-term average.
- **NormalsHeatingDegreeDay**: Normal heating degree days based on a long-term average.
- **REM**: Remarks or additional information about the data.
- **REPORT_TYPE.1**: An additional field for the type of report, potentially providing further classification or duplication of the report data.
- **SOURCE.1**: An additional field for the source identifier, potentially indicating a secondary source of data.
- **ShortDurationEndDate005** through **ShortDurationEndDate180**: The end dates for specified short durations of precipitation, ranging from 5 minutes to 3 hours, to which the corresponding precipitation values relate.
- **ShortDurationPrecipitationValue005** through **ShortDurationPrecipitationValue180**: The measured precipitation totals for specified short durations, corresponding to the 'ShortDurationEndDate' fields, ranging from 5 minutes to 3 hours.
- **Sunrise**: The official time of sunrise.
- **Sunset**: The official time of sunset.
- **WindEquipmentChangeDate**: The date of any change in wind measurement equipment.

For further details on each column and the data it contains, refer to the full Local Climatological Data (LCD) documentation.


## Custom Features in the Files or Generated

The following features are present in the CSV files or have been generated as part of data processing:

- **YEAR**: The year of the weather observation.
- **MONTH**: The month of the weather observation.
- **DAY**: The day of the weather observation.
- **sumPrecipitation**: Sum of hourly precipitation for the day.
- **maxDryBulbTemperature**: Maximum of hourly dry bulb temperatures.
- **minDryBulbTemperature**: Minimum of hourly dry bulb temperatures.
- **meanDryBulbTemperature**: Mean of hourly dry bulb temperatures.
- **meanDewPointTemperature**: Mean of hourly dew point temperatures.
- **meanWetBulbTemperature**: Mean of hourly wet bulb temperatures.
- **maxWindSpeed**: Maximum of hourly wind speeds.
- **meanWindSpeed**: Mean of hourly wind speeds.
- **maxRelativeHumidity**: Maximum of hourly relative humidity readings.
- **minRelativeHumidity**: Minimum of hourly relative humidity readings.
- **meanRelativeHumidity**: Mean of hourly relative humidity readings.
- **calculate_circular_meanWindDirection**: Circular mean of hourly wind directions.
- **mode_functionWindDirection**: Mode of hourly wind directions.
- **maxWindGustSpeed**: Maximum of hourly wind gust speeds.
- **mode_functionPresentWeatherType**: Mode of hourly present weather types.
- **mode_functionSkyConditions**: Mode of hourly sky conditions.


## Credits

Cite this dataset when used as a source.

- **Cited Authors**: 
DOC/NOAA/NESDIS/NCEI > National Centers for Environmental Information, NESDIS, NOAA, U.S. Department of Commerce
DOC/NOAA/NWS > National Weather Service, NOAA, U.S. Department of Commerce
DOD/USAF > U.S. Air Force, U.S. Department of Defense
DOT/FAA > Federal Aviation Agency, U.S. Department of Transportation

- **Originators**:
DOC/NOAA/NESDIS/NCEI > National Centers for Environmental Information, NESDIS, NOAA, U.S. Department of Commerce
DOC/NOAA/NWS > National Weather Service, NOAA, U.S. Department of Commerce
DOD/USAF > U.S. Air Force, U.S. Department of Defense
DOT/FAA > Federal Aviation Agency, U.S. Department of Transportation

- **Publishers**:
DOC/NOAA/NESDIS/NCEI > National Centers for Environmental Information, NESDIS, NOAA, U.S. Department of Commerce 

