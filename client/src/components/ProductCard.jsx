import axios from "axios";
import React from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const baseURL = "http://127.0.0.1:5000/product/";

export default function ProductCard(props) {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
            axios.get(baseURL + props.product_id).then((response) => {
            console.log(response.data)
            setPost(response.data);
        });
    }, []);

    if (!post) return "NOTFOUND";

    return (
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Missing Image"
                    src="/raquetas.png"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {post.result.Name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {post.result.CreatedAt}@{post.result.Location}
                    </CardSubtitle>
                    <CardText>
                        {post.result.Description}
                    </CardText>
                    <Button color="info">
                        Reclamar
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}
