*** Settings ***
Library   RobotMongoDBLibrary.Insert
Library   RobotMongoDBLibrary.Update
Library   RobotMongoDBLibrary.Find
Library   RobotMongoDBLibrary.Delete
Library   DatabaseLibrary

*** Variables ***
# CONNECT WITH PARAMS
# &{MONGODB_CONNECT_STRING}    host=127.0.0.1   port=27017   username=admin   password=password    database=robotdb     collection=customer

# CONNECT WITH CONNECTION STRING CLUSTER
&{MONGODB_CONNECT_STRING}=   connection=mongodb://localhost:27017/robotdb?authSource=robotdb    database=robotdb   collection=customer


*** Test Cases ***
Test insert data into mongodb
    &{DATA}     Create Dictionary   _id=X100001      name=Tarathep      address=Thailand     phone=8888888888
    ${MSG}      InsertOne   ${MONGODB_CONNECT_STRING}    ${DATA}
    Should Be Equal    ${MSG}    INSERTED SUCCESS


Test find by fillter data from mongodb
    &{FILLTER}     Create Dictionary   name=Tarathep      address=Thailand
    ${RESULTS}     Find    ${MONGODB_CONNECT_STRING}    ${FILLTER}
    FOR    ${RESULT}    IN    @{RESULTS}
           Log To Console    ${RESULT["phone"]}
    END


Test update data phone into mongodb by ID
    &{NEWDATA}     Create Dictionary        phone=0649359xxx
    ${MSG}      Update   ${MONGODB_CONNECT_STRING}    X100001      ${NEWDATA}
    Should Be Equal    ${MSG}    UPDATED SUCCESS


Test find data by ID from mongodb
    ${RESULTS}     FindOneByID    ${MONGODB_CONNECT_STRING}    X100001
    Log To Console      ${RESULTS}


Test delete data by ID into mongodb
    ${MSG}     DeleteOneByID    ${MONGODB_CONNECT_STRING}    X100001
    Should Be Equal    ${MSG}    DELETED SUCCESS


Person Table Contains Expected Records
    [Tags]    one
    Connect To My Oracle DB
    ${output}=    Query    select LAST_NAME from persion
    Length Should Be    ${output}    2
    Should Be Equal    ${output}[0][0]    bb
    Should Be Equal    ${output}[1][0]    cc


*** Keywords ***
Connect To My Oracle DB
    Connect To Database
    ...    pymysql
    ...    dbName=world
    ...    dbUsername=root
    ...    dbPassword=123456x@X
    ...    dbHost=localhost
    ...    dbPort=3306


