import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";

const MyPlant = () => {
    return(
        <MyPlantBackGround>
            <Header>
                <Text>내 식물들</Text>
                <FcPlus size="40" />
            </Header>
            <Container>
                <PlantCard>
                    <Link to="/profile">
                        <ImgBox>
                            <PlantImg src="/assets/image/plant.png" alt="plant" />
                            <CharacterName>귀염뽀짝상추</CharacterName>
                            <Level>Lv.1</Level>
                        </ImgBox>
                    </Link>
                </PlantCard>  
                <PlantCard>

                </PlantCard> 
            </Container> 
            <Container>
                <PlantCard>

                </PlantCard>  
                <PlantCard>

                </PlantCard> 
            </Container> 
            
            
        </MyPlantBackGround>
    );
};

export const MyPlantBackGround = styled.div`
    flex: 1;
    position: relative;
    background-color: #fffaed;
    background-size: cover;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    height: 10%;

    svg:hover {
    cursor: pointer;
    }
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const Container = styled.div`
    width: 100%;
    height: 40%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const PlantCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 90%;
    border-radius: 30px;
    background-color:#feefc6;
    margin: 10px;

    &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer; 
}
`;

export const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:150px;
    height:250px;
    margin:10px 0px 10px 10px;

`;

export const PlantImg = styled.img`
    width: 120px;
    height: 120px;
    margin: 10px;
`;

export const CharacterName = styled.span`
    margin:5px 5px 0px 5px;
    font-weight: 500;
`;

export const Level = styled.span`
    font-weight: 400;
    font-size: 12px;
`






export default MyPlant;