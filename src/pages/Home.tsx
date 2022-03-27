
import Articles from 'data/Articles';
import Article from 'models/Article';
import { Card, Col } from "react-bootstrap";

export default function Home(): JSX.Element {
    
    return <>
        <div className="container px-4 py-5" id="blog-cards">
            <h2 className="pb-2 border-bottom">Articles</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {Articles.map((article:Article,key:number) => {
                    let styles = {
                        cover: {
                            backgroundImage: `url(${article.image})`,
                        }
                    }

                    return <>
                        <Col key={key}>
                            <Card className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={styles.cover}> 
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{article.title}</h2>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        {/*
                                        <li className="me-auto">
                                            <img src={article.author.icon} alt=`Author icon: {article.author.name}` />
                                        </li>
                                        */}
                                        <li className="d-flex align-items-center">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>                  
                                        </li>
                                        <small><time>{article.date.getDate()}</time></small>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </>
                })}
            </div>
        </div>
    </>
}