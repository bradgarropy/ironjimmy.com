import React from "react"
import PropTypes from "prop-types"
import Container from "../styles/Container"
import Collection from "../components/Collection"

const CollectionTemplate = ({pageContext}) => {
    const {collection} = pageContext

    return (
        <Container>
            <Collection collection={collection}/>
        </Container>
    )
}

CollectionTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

CollectionTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default CollectionTemplate
