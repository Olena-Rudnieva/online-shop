
import axios from "axios";

export const fetchBranches = async (cityRef?: string) => {
  try {
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/Address/getWarehouses', {
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityRef: cityRef, 
      },
    });

       if (!response.data.success) {
      console.error("Error:", response.data.errors); 
      return []; 
    }

    return response.data.data.map((branch: any) => ({
      id: branch.Ref,
      description: branch.Description,
      cityDescription: branch.CityDescription,
      typeOfWarehouse: branch.TypeOfWarehouse,
      number: branch.Number,
    }));
  } catch (error) {
    console.error("Error fetching branches:", error);
    return []; 
  }
}