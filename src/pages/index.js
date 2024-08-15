import { Salmon, Fish } from "@/component/recipes";
// import { SalmonInstruction, Fishinstruction } from "@/component/Instructions";

export default function Home() {
  return (
    <div>
      <h1>Deliciuos recipes</h1>
      <h2>Baked salmon</h2>
      <Salmon></Salmon>
      <h1>Cooking Instruction</h1>
      <SalmonInstruction></SalmonInstruction>
      <h2>Fish Tacos</h2>
      <Fish></Fish>
      <h1>Cooking Instruction</h1>
      <Fishinstruction></Fishinstruction>
    </div>
  );
}

// const datas = [
//   {
//     name: "Baked Salmon",
//     ingredients: [
//       { name: "Salmon", amount: 1, measurement: "l lb" },
//       { name: "Pine Nuts", amount: 1, measurement: "cup" },
//       { name: "Butter Lettuce", amount: 2, measurement: "cups" },
//       { name: "Yellow Squash", amount: 1, measurement: "med" },
//       { name: "Olive Oil", amount: 0.5, measurement: "cup" },
//       { name: "Garlic", amount: 3, measurement: "cloves" },
//     ],
//     steps: [
//       "Preheat the oven to 350 degrees.",
//       "Spread the olive oil around a glass baking dish.",
//       "Add the salmon, garlic, and pine nuts to the dish.",
//       "Bake for 15 minutes.",
//       "Add the yellow squash and put back in the oven for 30 mins.",
//       "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
//     ],
//   },
//   {
//     name: "Fish Tacos",
//     ingredients: [
//       { name: "Whitefish", amount: 1, measurement: "l lb" },
//       { name: "Cheese", amount: 1, measurement: "cup" },
//       { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
//       { name: "Tomatoes", amount: 2, measurement: "large" },
//       { name: "Tortillas", amount: 3, measurement: "med" },
//     ],
//     steps: [
//       "Cook the fish on the grill until hot.",
//       "Place the fish on the 3 tortillas.",
//       "Top them with lettuce, tomatoes, and cheese",
//     ],
//   },
// ];

// const List = (props) => {
//   const { name } = props;
//   return (
//     <div>
//       {" "}
//       <li>{name}</li>
//     </div>
//   );
// };

// const Step = (props) => {
//   const { step } = props;
//   return (
//     <div>
//       <p>{step}</p>
//     </div>
//   );
// };
// const Recipe = () => {
//   return (
//     <div>
//       {datas.map((data) => {
//         return;
//         <List name={data.name}></List>;
//         {
//           ingredients.map((ingredient, index) => {
//             return (
//               <div>
//                 <List key={index} name={ingredient.name}></List>
//                 <Step key={index} step={steps.value}></Step>
//               </div>
//             );
//           });
//         }
//       })}
//     </div>
//   );
// };
// export default Recipe;
