// import styles from "@/component/sub.module.css";

// let ingredients = [
//   { name: "Salmon", amount: 1, measurement: "l lb" },
//   { name: "Pine Nuts", amount: 1, measurement: "cup" },
//   { name: "Butter Lettuce", amount: 2, measurement: "cups" },
//   { name: "Yellow Squash", amount: 1, measurement: "med" },
//   { name: "Olive Oil", amount: 0.5, measurement: "cup" },
//   { name: "Garlic", amount: 3, measurement: "cloves" },
// ];
// const List = (props) => {
//   const { name } = props;
//   return <li>{name}</li>;
// };

// export const Salmon = () => {
//   return (
//     <div>
//       {ingredients.map((ingredient, index) => {
//         return <List name={ingredient.name} key={index}></List>;
//       })}
//     </div>
//   );
// };

// // Fish ingredients

// const fishingredients = [
//   { name: "Whitefish", amount: 1, measurement: "l lb" },
//   { name: "Cheese", amount: 1, measurement: "cup" },
//   { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
//   { name: "Tomatoes", amount: 2, measurement: "large" },
//   { name: "Tortillas", amount: 3, measurement: "med" },
// ];
// export const FishList = (props) => {
//   const { name } = props;
//   return (
//     <div>
//       <li>{name}</li>
//     </div>
//   );
// };
// export const Fish = () => {
//   return (
//     <div>
//       {fishingredients.map((fishingredient, index) => {
//         return <FishList key={index} name={fishingredient.name}></FishList>;
//       })}
//     </div>
//   );
// };
