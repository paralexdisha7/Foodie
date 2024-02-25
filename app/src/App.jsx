import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all")


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilteredData();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("!!Data no Fetched...");
      }
    };
    fetchFoodData();
  }, []);


  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) {
    return <>{error}</>;
  }
  if (loading) {
    return <>Loading....</>;
  }
  return (
    <>
      <Container>
        <TopSection>
          <div className="logo">
            <h2>Foodie</h2>
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search food"
            />
          </div>
        </TopSection>
        <FilterContainer>
          {
            filterBtns.map((value) =>(
              <Button key={value.name} onClick={() => filterFood(value.type)}>{value.type}</Button>

            ))
          }
         
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.section`
  min-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  color: whitesmoke;
  .search {
    input {
      background-color: white;
      border: 1px solid red;
      color: black;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #0087c6;
  border-radius: 5px;
  padding: 10px 15px;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  &:active{
    background-color: #005c87;
  }
`;
