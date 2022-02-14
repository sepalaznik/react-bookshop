import React from "react";
import axios from "axios";
import { Container, Card } from "semantic-ui-react";

import HeaderMenu from "../containers/Menu-container";
import Filter from "../containers/Filter-container";
import GoodsCard from "../containers/Card-container";

class App extends React.Component {
    UNSAFE_componentWillMount() {
        const { setGoods } = this.props;
        axios.get("https://react-bookshop-a7f59-default-rtdb.firebaseio.com/books.json").then(({ data }) => {
            setGoods(data);
        });        
    }

    render() {
        const { goods, isLoading } = this.props;

        return (
            <Container>
                <HeaderMenu />
                <Filter />
                <Card.Group itemsPerRow={4} doubling >
                    {!isLoading 
                        ? "Загрузка данных с сервера..." 
                        : goods.map((item) => (<GoodsCard key={item.id} {...item} />))
                    }
                </Card.Group>
            </Container>
        );
    }
}

export default App;
