// importing React
import * as React from 'react';

// importing all the components that will be used.
import { Button, Text, View,StyleSheet, Alert, TouchableOpacity } from 'react-native';

// importing all the necessary Navigators and  the NavigationContainer.
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const QuizStack = createStackNavigator();

// function to create the home screen of the quiz.
function HomeScreen({ navigation }) {
    return (
      // View will display everything inside of it.
      // Style will be given with stylesheet.
     <View style={styles.container}>
       <Text 
       // Text component is used to display text and can be customized with stylesheet.
          style={styles.title}>
          Dyslexia Quiz
       </Text>
       <View style={styles.profileContainer}>
       <TouchableOpacity style ={styles.titleButton}
       // Touchable Opacity component is a button which can be fully customizable with stylesheet.
       // onPress will call navigate to first quizscreen when touchable opacity is pressed.
       onPress={() => navigation.navigate('Q1')}>
        <Text style ={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      </View>
     </View>

    );
  }
  // function to create the first quiz screen.
  function Q1Screen({ navigation }) {
    return (
      // View will display everything inside of it.
      // Style will be given with stylesheet.
      <View style={styles.container}>  
        <Text style={styles.questionTitle}> Q1 - I find it hard to summarize an article.</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to the second quiz screen.
          onPress={() => navigation.navigate('Q2')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to another screen that talks about how the user may have surface dyslexia.
            onPress={() => navigation.navigate('Dyslexia1')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // function to create the screen that talks about how the user could possibly have surface dyslexia.
  function Q1Dyslexia({ navigation }) {
    return (
      <View style={styles.container}> 
        <Text style={styles.questionTitle}>You may have Surface Dyslexia. This type makes it hard to comprehend. 
              Would you like to continue the quiz?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to the second quiz screen.
            onPress={() => navigation.navigate('Q2')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Q2Screen({ navigation }) {
    return (
      <View style={styles.container}>  
        <Text style={styles.questionTitle}>Q2 - I often read and spell words wrong.</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style ={styles.button}
      // If the "No" Touchable Opacity is pressed, then the screen will navigate to the third quiz screen.
          onPress={() => navigation.navigate('Q3')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to another screen that talks about how the user may have phonological dyslexia.
            onPress={() => navigation.navigate('Dyslexia2')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }

  // function to create the screen that talks about how the user could possibly have Phonological dyslexia.
  function Q2Dyslexia({ navigation }) {
    return (
        <View style={styles.container}> 
        <Text style={styles.questionTitle}>You may have Phonological Dyslexia. This type makes it hard to breaks words into phonemes and spell. 
              Would you like to continue the quiz?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to the home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to the third quiz screen.
            onPress={() => navigation.navigate('Q3')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>  
    );
  }

  function Q3Screen({ navigation }) {
    return (
    <View style={styles.container}>  
        <Text style={styles.questionTitle}> Q3 - I find it hard to remember my thoughts.</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to the forth quiz screen.
          onPress={() => navigation.navigate('Q4')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to another screen that talks about how the user may have visual dyslexia.
            onPress={() => navigation.navigate('Dyslexia3')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // function to create the screen that talks about how the user could possibly have Visual dyslexia.
  function Q3Dyslexia({ navigation }) {
    return (
        <View style={styles.container}> 
        <Text style={styles.questionTitle}>You may have Visual Dyslexia. 
        This type makes it hard to remember your thoughts.
        Would you like to continue the quiz?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to the home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to the forth quiz screen.
            onPress={() => navigation.navigate('Q4')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>  
    );
  }

  function Q4Screen({ navigation }) {
    return (
        <View style={styles.container}>  
        <Text style={styles.questionTitle}> Q4 - Do both you and your parent/s have trouble with reading?</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to the fifth quiz screen.
          onPress={() => navigation.navigate('Q5')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to another screen that talks about how the user may have primary dyslexia..
            onPress={() => navigation.navigate('Dyslexia4')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // function to create the screen that talks about how the user could possibly have Primary dyslexia.
  function Q4Dyslexia({ navigation }) {
    return (
        <View style={styles.container}>  
        <Text style={styles.questionTitle}>You may have Primary Dyslexia. This type is genetically inherited, meaning it came from your parents.
Would you like to continue the quiz?</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to the fifth question screen.
            onPress={() => navigation.navigate('Q5')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  function Q5Screen({ navigation }) {
    return (
        <View style={styles.container}>  
        <Text style={styles.questionTitle}> Q5 - Do you tend to read slower than your peers?</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // If the "No" Touchable Opacity is pressed, then the screen will navigate to home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.button}
          // If the "Yes" Touchable Opacity is pressed, then this screen will navigate to another screen that talks about how the user may have surface dyslexia.
            onPress={() => navigation.navigate('Dyslexia5')}>
           <Text style ={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  // function to create the screen that talks about how the user could possibly have Surface dyslexia.
  function Q5Dyslexia({ navigation }) {
    return (
        <View style={styles.container}>  
        <Text style={styles.questionTitle}> You may have Surface Dyslexia. This type makes it longer to process what you're reading.</Text>
         <View style={styles.buttonContainer}>
          <TouchableOpacity style ={styles.button}
          // When this Touchable Opacity is pressed, the screen will navigate to home screen.
          onPress={() => navigation.navigate('Home')}>
           <Text style ={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // exporting the class so other files can import it.
export default class QuizScreen extends React.Component {
render() {
  return (
    // Creating screens with the previous functions inside of it, and storing the screens inside of stack navigator.
      <QuizStack.Navigator>
      <QuizStack.Screen name="Home" component={HomeScreen} 
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }}/>            
      <QuizStack.Screen name="Q1" component={Q1Screen}
       options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }}/>
      <QuizStack.Screen name="Q2" component={Q2Screen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Q3" component={Q3Screen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Q4" component={Q4Screen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Q5" component={Q5Screen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Dyslexia1" component={Q1Dyslexia}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Dyslexia2" component={Q2Dyslexia}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Dyslexia3" component={Q3Dyslexia}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Dyslexia4" component={Q4Dyslexia}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
      <QuizStack.Screen name="Dyslexia5" component={Q5Dyslexia}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#cec1e7',
        },
      }} />
    </QuizStack.Navigator>
  );
 }
}
// StyleSheet is an area where you can store different styles inside of a container, and assign the container to one or multiple components.

// One example of a container is "profileContainer" or "title".
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cec1e7',
      textAlign: "center",
      alignItems: "center"
    },
    profileContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: "center",
      fontSize: 60,
      fontWeight: "200",
      paddingBottom: 25,
      color: '#6B238E',
      marginTop: 25
    },
    questionTitle: {
      fontSize: 32,
      fontWeight: "200",
      paddingBottom: 25,
      color: '#6B238E',
      marginTop: 10,
      textAlign: "center"
    },
    button: {
      marginTop: 30,
      margin: 2,
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: '#6B238E',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8, 
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText: {
      color: '#FFFF',
      fontWeight: "200",
      fontSize: 25,
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      margin: 20
    },
    titleButton: {
      marginTop: -100,
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: '#6B238E',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 8, 
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    }
  });