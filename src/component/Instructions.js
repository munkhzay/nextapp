// const steps = [
//   { text: "Preheat the oven to 350 degrees." },
//   { text: "Spread the olive oil around a glass baking dish." },
//   { text: "Add the salmon, garlic, and pine nuts to the dish." },
//   { text: "Bake for 15 minutes." },
//   { text: "Add the yellow squash and put back in the oven for 30 mins." },
//   {
//     text: "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
//   },
// ];
// const Name = (props) => {
//   const { text } = props;
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// };
// export const SalmonInstruction = () => {
//   return (
//     <div>
//       {steps.map((step, index) => {
//         return <Name key={index} text={step?.text}></Name>;
//       })}
//     </div>
//   );
// };

// //

// const fishsteps = [
//   { text: "Cook the fish on the grill until hot." },
//   { text: "Place the fish on the 3 tortillas." },
//   { text: "Top them with lettuce, tomatoes, and cheese" },
// ];
// const List = (props) => {
//   const { text } = props;
//   console.log(text);
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// };
// export const Fishinstruction = () => {
//   return (
//     <div>
//       {fishsteps?.map((fishstep, index) => {
//         return <List text={fishstep?.text} key={index}></List>;
//       })}
//     </div>
//   );
// };
