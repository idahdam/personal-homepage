import React from 'react'
import {
    CatalogContainer,
    CatalogBody,
    CatalogTitle,
    CatalogImg,
    CatalogContainerRow,
    CatalogContainerColumn,
    CatalogContainerColor
} from './Catalog.Elements';


const Catalog = ({img, title, body, catalogColor}) => {
    return(
        <>
            <CatalogContainer>
                <CatalogContainerRow>
                    <CatalogContainerColumn>
                        <CatalogContainerColor catalogColor="false">
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                            <CatalogBody>{body}</CatalogBody>
                        </CatalogContainerColor>
                    </CatalogContainerColumn>
                    <CatalogContainerColumn>
                        <CatalogContainerColor>
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                            <CatalogBody>{body}</CatalogBody>
                        </CatalogContainerColor>
                    </CatalogContainerColumn>
                    <CatalogContainerColumn>
                        <CatalogContainerColor catalogColor="false">
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                            <CatalogBody>{body}</CatalogBody>
                        </CatalogContainerColor>
                    </CatalogContainerColumn>
                </CatalogContainerRow>
            </CatalogContainer>
        </>
    )
};

export default Catalog