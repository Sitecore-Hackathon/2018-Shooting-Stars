import Twitters from "./components/Twitters";

const components = new Map();
components.set("Twitters", Twitters);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
