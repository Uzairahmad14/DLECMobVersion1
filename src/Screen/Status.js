function Status({ navigation }) {
    return (
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              marginTop: 20,
              fontSize: 23,
              fontWeight: 'bold',
            }}>
          
            Status of Applications
          </Text>
          <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.titleHeader}> ID</DataTable.Title>
              <DataTable.Title style={styles.titleHeader}> Title</DataTable.Title>
              <DataTable.Title style={styles.titleHeader}>Date</DataTable.Title>
              <DataTable.Title style={styles.titleHeader}>Status</DataTable.Title>
            </DataTable.Header>
  
            <TouchableOpacity>
              <DataTable.Row>
                <DataTable.Cell>#24562</DataTable.Cell>
                <DataTable.Cell>Hire Advocate</DataTable.Cell>
                <DataTable.Cell>3-04-2023</DataTable.Cell>
                <DataTable.Cell>Pending</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <DataTable.Row>
                <DataTable.Cell>#62345</DataTable.Cell>
                <DataTable.Cell>Court Fee</DataTable.Cell>
                <DataTable.Cell>13-04-2023</DataTable.Cell>
                <DataTable.Cell>Rejected</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <DataTable.Row>
                <DataTable.Cell>#20980</DataTable.Cell>
                <DataTable.Cell>Legal Aid</DataTable.Cell>
                <DataTable.Cell>23-02-2023</DataTable.Cell>
                <DataTable.Cell>Accepted</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <DataTable.Row>
                <DataTable.Cell>#92271</DataTable.Cell>
                <DataTable.Cell>Education</DataTable.Cell>
                <DataTable.Cell>3-04-2023</DataTable.Cell>
                <DataTable.Cell>Pending</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <DataTable.Row>
                <DataTable.Cell>#86452</DataTable.Cell>
                <DataTable.Cell>Health</DataTable.Cell>
                <DataTable.Cell>10-03-2023</DataTable.Cell>
                <DataTable.Cell>Accepted</DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          </DataTable>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: 'white',
      marginTop: 28,
    },
    tableHeader: {
      backgroundColor: '#D3D3D3',
      fontWeight: 'bold',
      color: 'white',
    },
    titleHeader: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 5,
    },
     con: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
     
  });