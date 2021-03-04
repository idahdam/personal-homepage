import React from 'react'
import {
    CatalogContainer,
    CatalogBody,
    CatalogTitle,
    CatalogImg,
    CatalogContainerRow,
    CatalogContainerColumn,
    CatalogContainerColor,
    CatalogContainerHref
} from './Catalog.Elements';


const Catalog = ({img, title, body, catalogColor}) => {
    return(
        <>
            <CatalogContainer>
                <CatalogContainerRow>
                    <CatalogContainerColumn>
                        <CatalogContainerHref href="#" catalogColor="false">
                        <CatalogContainerColor catalogColor="false">
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                        </CatalogContainerColor>
                        </CatalogContainerHref>
                    </CatalogContainerColumn>
                    <CatalogContainerColumn>
                        <CatalogContainerHref href="#">
                        <CatalogContainerColor>
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                        </CatalogContainerColor>
                        </CatalogContainerHref>
                    </CatalogContainerColumn>
                    <CatalogContainerColumn>
                        <CatalogContainerHref href="#" catalogColor="false">
                        <CatalogContainerColor catalogColor="false">
                            <CatalogImg src={img}></CatalogImg>
                            <CatalogTitle>{title}</CatalogTitle>
                        </CatalogContainerColor>
                        </CatalogContainerHref>
                    </CatalogContainerColumn>
                </CatalogContainerRow>
            </CatalogContainer>
        </>
    )
};

export default Catalog