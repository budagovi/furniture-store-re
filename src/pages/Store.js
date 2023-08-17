import Actions from "../components/storePage/Actions";

const StorePage = () => {
  return <Actions />
}

export default StorePage;

export const action = async ({request}) => {
  const data = await request.formData();
  return data.get('q');
}