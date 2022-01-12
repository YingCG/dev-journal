// import React from 'react'

// function JsBasic () {

//     return (
//       <>
//       <div>
//        <div className="Content-question-answer">
//     {/* <!-- An analogy to describe the differences between HTML and CSS --> */}
//     <div className="question">JavaScript and its relationship to HTML and CSS</div>
//            <div className="oneColum">
//           <h4>HTML</h4>
//             To build the architecture of a website.
//           <h4>CSS </h4>
//             To apply styles of the space. We specify the layout according to the moodboard and concept we are achieving. 
//           <h4>JavaScript</h4>
//             Like connect to the electric and water supply, all this little behaviour to make beautiful space better experience while enjoy and stay.
//             JavaScript can access and change HTML elements,HTML attributes and CSS styles of a website. 
//     </div>

  
//     {/* <!-- Control Flow & loop --> */}
//     <div className="question">Control Flow &amp; Loop</div>
//       <div className ="answer-list">
//         <div className="answer">
//           <h4>Control Flow </h4>
//           <p>Use to execution code only under certain conditions. </p>
//           <ul>
//           <li className="InlineLayout">Conditional statement</li>
//           <li className="InlineLayout">Execute statement</li>
//           <li className="InlineLayout">True or false</li>
//         </ul>    
        
//         < className="code-Example"> 
//           <h4>If  |  else if  |  else</h4>
//           <h5>Quite often have a var/ object on top to give the function working</h5>
//               var = newDate();<br/>
//               var hrs = myDate.getHours();<br/>
//               var greet;<br/>
//               <br/>
//               <h5>// if set the condition to return true</h5>
//               if (hrs &lt; 12){<br/>
//                greet ="Good Morning";<br/>
//                <h5>// code block to be executed if statement is true</h5>
//               }<br/><br/>
//               else if(hrs &gt;=12 &amp;&amp; hrs &lt; 17){<br/>
//               greet ="Good Afternoon";<br/>
//               <h5>// code block to be executed if statement is true</h5>
//               }<br/><br/>
//               else{
//               <h5>// code block to be executed if statement is true</h5>
//               }
//         </div>
//       </div>

//         <div className="answer">
//           <h4>Loop</h4>
//           <p>Loop through a block of code a number of times while the condition is true</p>
//             <div className="split">
//               <div className="code-Example"> 
//                 <h4>for</h4>
//                 for(&#10122;let i=0; &#10123;i &lt; length; &#10124;i++)<br/>
//                 { &#10125; return
//                   <h5>//  code block to be executed</h5>
//                 }
//               </div>

            
//               <div className="code-Example"> 
//                 <h4>while</h4>
//                 &#10122; let i=0<br/>
//               while (&#10123;i &lt; length)<br/>
//               { &#10125; return
//                 <h5>//  code block to be executed</h5>
//                 &#10124;i++<br/>
//               }
//               </div>

            
//             </div> 
//             <div className="split">
//               <div className="code-Example"> 
//                 <br/>
//                 <h4>for...in  |  for...of  |  forEach</h4>
//                 const array=['a', 'b', 'c'];<br/>
//                 for (key in object){
//                   <h5>// code block to be executed</h5>
//                 }
//               </div>
//               <div className="code-Example"> 
//                 <p>ForEach goes by value and calls a callback function <br/>
//                   For of goes by value<br/><br/>
//                   For in goes by index<br/>
//                   when used on objects, for in goes by properties</p>
//               </div>
//             </div>

//           <p>Plus plus or minus munis behave different infront or behind</p>

//           <div className="split">
//             <div className="code-Example"> 
//                 x = 2; <br/>
//                 y = x++;<br/>
//                 {<h5>here y is 2, x is 3</h5>}
//             </div>

//             <div className="code-Example"> 
//               x = 2; <br/>
//               y = ++x;<br/>
//               {<h5>here y is 3, x is 2</h5>}
//               </div>
//             </div>

//         </div>
//       </div>
//     </div>

//     {/* // <!-- Describe what the DOM is and an example of how you might interact with it. --> */}
//     <div className="question" id="DOM-Square">The DOM</div> 
//         <div className ="answer-list">
//           <div className="answer">
//             <h4>Document Object Model </h4>
//             <p> HTML DOM allows JavaScript to react to HTML event by defining the all elements in a website as objects. To access the objects, or its properties, we method.          
//               <h4>Steps to manipulate DOM: </h4>
//                   1. Using selector to choose the HTML object or properties.<br/>
//                   2. Add the event listener<br/>
//                   3. To assign an event handler<br/>
//                   4. We calling the event handler from where it need to happens.</p>
          
//               <h4>Commom method we use as Selector:</h4>
//               <ul>
//                 <li className="InlineLayout">this</li>
//                 <li className="InlineLayout">getElementByTagName</li>
//                 <li className="InlineLayout">getElementByclassNameName</li>
//                 <li className="InlineLayout">getElementById</li>
//                 <li className="InlineLayout">querySelector</li>
//                 <li className="InlineLayout">querySelectorAll</li>
//               </ul>
//           </div>
//         <div className="answer">
//           <h4>Commom Event listerner:</h4>
//           <ul>
//             <li className="InlineLayout">'onload'</li>
//             <li className="InlineLayout">'click'</li>
//             <li className="InlineLayout">'onclick'</li>
//             <li className="InlineLayout">'mouseover'</li>
//             <li className="InlineLayout">'mouseout'</li>
//             <li className="InlineLayout">'toggel'</li>
//           </ul>
          
//           <h4>To change the selected object:</h4>
//               <ul>
//               <li className="InlineLayout">element.innerHTML</li>
//               <li className="InlineLayout">element.attribute</li>
//               <li className="InlineLayout">element.style.property</li>
//               <li className="InlineLayout">element.setAttribute(attribute, value)</li>
//           </ul>
//         </div>
// </div>
//     {/* // <!-- Explain the difference between accessing data from arrays and objects. --> */}
//     <div className="question" id="Arrays-Objects-Square">Objects and Arrays</div>
//     {/* // <!-- <div className="invisible" id="Arrays-Objects-answer">Arrays and Objects</div> --> */}
//     <div className ="answer-list">
//         <div className="twoColumn">
//           <h4>Objects </h4>
//           A list of properties consist key and value
//             <li className="InlineLayout">var</li>
//             <li className="InlineLayout">const</li>
//             <li className="InlineLayout">let</li>
 
//             <p className="code-Example"> 
//               var person ={ <br/>
//                 key: value,<br/>
//                 name: JavaScript,<br/>
//                 level: 1<br/>
//               };
//             </p>
//   </div>
//         <div className="twoColumn"><h4>Arrays</h4>
//           Store a list of items or objects in a single variable, useful when creating orderded colletions. Item can be added and removed from beginning or end of an array using:
//           <ul>
//             <li className="InlineLayout">push()</li>
//             <li className="InlineLayout">pop()</li>
//             <li className="InlineLayout">unshift()</li>
//             <li className="InlineLayout">shift()</li>
//             </ul>
//             <div className="code-Example"> 
//               var weekdays ={'Monday','Tuesday','Wednesday','Thursday','Friday' };
//             </div>
//         </div>  
// </div>

//     {/* // <!-- <div className="invisible" id="Accessing-answer">Difference between accessing data from arrays and objects</div> --> */}
//     <div className="question" id="Accessing-Square">Accessing data from arrays and objects</div>
//       <div className ="answer-list">
      
//         <div className="twoColumn"><h4>To access Objects </h4>
//           Using dot. or br/acket [ ]notation<br/><br/>
//           <div className="code-Example">
//             <h4>dot(.) </h4>
//             object.key <h5>// return value</h5><br/>

//             <h4>br/acket [ ] </h4>       
//             object['key'] <h5>// return value</h5>
//           </div>
//         </div>

//         <div className="twoColumn"><h4>To access Arrays</h4>
//           using br/acket [ ] select index number start from 0<br/><br/>
//           <div className="code-Example">
//             <h4>br/acket [ index number ] </h4>       
//             arrayList[0] 
//             <h5>// return first element in array</h5>
//           </div>
//         </div>
//       </div>

// {/* //   <!-- Explain what functions are and why they are useful. --> */}
//   <div className="question" id="Functions-Square">Functions and why they are useful</div>
//     <div className ="answer-list">

//       <div className ="answer">
//         <p>Function group code together<br/>
//         Function reuse the group of code<br/>
//         Function can take argument, can return value<br/>
//         There are function without argument, one argument and multiple argument<br/>
//         </p>
//         <h4>function () can write as () =&gt;</h4>

//         <p>
//         A parameter is the variable listed inside the parentheses in the function definition.</p>
//         <p>
//         An argument is the value that is sent to the function when it is called.</p>

//         </div>
//         <div className ="answer">
//             <div className="code-Example">
//               <h5>// First way to write Function</h5>
//               function add(a, b){<br/>
//                 return a + b + 100;<br/>
//               }
            
//                 <h5>// Second way to write Function</h5>
//                 var add = function(a, b) {<br/>
//                   return a + b;<br/>
//                 };
//                 <h5>// Third way to write Arrow Function</h5>
//                 (a, b) =&gt; a + b + 100;

//                 <h5>// Function without arguments</h5>
//                 let a = 4;<br/>
//                 let b = 2;<br/>
//                 () =&gt; a + b + 100;
//                 <h5>
//                 function (){return a + b + 100;}</h5>
//               </div>
//               </div>
//               </div>
//               </div>
//       </>
//     )
//   }


// export default JsBasic
