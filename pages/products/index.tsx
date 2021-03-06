import React, { useState } from "react";
import useStyles from "./style";
import { PaginationRenderItemParams } from "@material-ui/lab";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";
import { GetStaticProps } from "next";
import Loading from "../../components/Loading";
import { Product } from "../../interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { ParsedUrlQuery } from "querystring";
import { PrismaClient } from "@prisma/client";
// import { request } from "graphql-request";
import useSWR from "swr";
const prisma2 = new PrismaClient();
import CustomModal from '../../components/Modal';
import Router from "next/router";
import LazyLoad from 'react-lazyload';

const take = "15";

// const API = "http://localhost:3000/api/graphql";
// const fetcher = (query: any, skip: string, take: string) =>
//   request(API, query, { skip, take });


const ALL_PRODUCTS2 = /* GraphQL */ `
  query allProducts($skip: String!, $take: String!) {
    allProducts(skip: $skip, take: $take) {
      id
      name
    }
  }
`;


export interface IProducts {
  products: {
    allProducts: Product[]
  };
  numberPages: number;
  skip: string;
}

export default function Products({ skip, products, numberPages }: IProducts) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product>();


  const { data } = useSWR([ALL_PRODUCTS2, skip, take], {
    initialData: products,
  });

  const loading: boolean = !data;

  const router = useRouter();
  if (router.isFallback || loading) {
    return <Loading />;
  }

  const handleOnclickDeleteBtn = async ( product: Product, e: any) => {
    await handleOpen(e);// Active product. ...
    await setActiveProduct(product);
  }

  const redirectRouting = async (currentPage: string) => {
    await Router.replace(`/products/${currentPage}`,  `/products/${currentPage}`, {shallow: true})
  }

  const handleOpen = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  const handleOpenOrCloseEdit = (e: any) => {
    e.preventDefault();
    setOpenEdit(!openEdit);
  };

  // @ts-ignore
  let updatedProducts: Product[] = [];

  const typeOfUpdateProducts = typeof data
  if (typeOfUpdateProducts === "object") {
    // @ts-ignore
    updatedProducts = data?.allProducts || undefined
  }

  return (
    <div className={classes.wrapper}>
      {/* Break component ===>  */}
      {open && (
        activeProduct && <CustomModal
            handleOpen={handleOpen}
            product={activeProduct!}
            handleClose={handleClose}
            open={open}
            redirectRouting={redirectRouting}
            currentPage= {(router.query.page || 1) as string}
            isEdit={false}
          // @ts-ignore
            products ={productArray || products || []}
        />

      )}
      {openEdit? (<CustomModal
          redirectRouting={redirectRouting}
          product={activeProduct!}
          currentPage= {(router.query.page || 1) as string}
          handleClose={handleOpenOrCloseEdit}
          handleOpen={handleOpenOrCloseEdit}
          open={openEdit}
          isEdit={true}
          // @ts-ignore
          products ={productArray || products || []}
        />)
        :null
      }
      <div className={classes.content__tittle}>
        <div>POPULAR PRODUCTS</div>
      </div>
      <Box className={classes.content__pagination}>
        {numberPages > 0 || !router.isFallback ? (
          <Pagination
            page={parseInt((router.query.page as string) || "1")}
            count={numberPages}
            defaultPage={1}
            renderItem={(item) => (
              <PaginationItem
                component={MaterialUiLink}
                query={router.query || 1}
                item={item}
                {...item}
              />
            )}
          />
        ) : (
          <Skeleton variant="rect" width={"30vw"} height={"28px"} />
        )}
      </Box>
      <div className={classes.content__items}>
        {(updatedProducts) ? (
          updatedProducts.map((p: Product, i: any) => {
            return (
              <Box className={classes.lazyLoading}>
                <LazyLoad
                  key={p.id}
                  height={9}
                  offset={[-9,9]}
                  placeholder={<Loading/>}
                >
                  <Link
                    href="/products/details/[id]"
                    as={`/products/details/${p.id}`}
                  >
                    <Card key={i} className={classes.content__item}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.item__media}
                          image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {p.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Maximum impact cushioning. The brutal, repetitive,
                            downward force of sport can wreak havoc on the body and
                            on performance. Max Air cushioning is specifically
                            engineered to handle these impacts and provide
                            protection. Max Air is big air designed to take a
                            pounding.
                          </Typography>
                          <Typography className={classes.item__price}>
                            PRICE: 60.0 Euro
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.item__buttons}>
                        <Box component="div">
                          <Button
                            size="small"
                            color="primary"
                            className={classes.button__addToCart}
                          >
                            Add To Cart
                          </Button>
                          <Button size="small" color="primary" onClick={handleOpenOrCloseEdit}>
                            EDIT
                          </Button>
                        </Box>
                        {/* Set active product ===> nhu */}
                        <Button
                          size="small"
                          color="primary"
                          onClick={(e) => handleOnclickDeleteBtn(p, e)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Link>
                </LazyLoad>
              </Box>
            );
          })
        ) : (
          <Box className={classes.content__skeleton}>
            <Skeleton variant="rect" width={"28vw"} height={"720px"} />
            <div className={classes.wrapper__loading}>
              <Loading />
            </div>
          </Box>
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const totalProducts = await prisma2.product.findMany();
  const productsArray = Object.keys(totalProducts).map(
    (k) => totalProducts[parseInt(k)]
  );
  const numberPages = Math.ceil(
    ((productsArray?.length || 0) as number) / +take
  ) as number;
  const pageQuery = (ctx?.params?.page || 1) as string;

  const skip = String((parseInt(pageQuery) - 1) * +take);

  const productsOfPage = await prisma2.product.findMany({
    skip: +skip,
    take: +take
  });

  // const {  data } = await client.query({
  //   query: ALL_PRODUCTS,
  //   variables: {
  //     skip: skip,
  //     take: take
  //   }
  // })

  const products = {
    allProducts: productsOfPage
  }
  // Comment because we should not fetch api in getStaticProps, so we get data directly from db
  // const products: Product[] = await fetcher(ALL_PRODUCTS2, skip as string, take as string);

  return {
    props: {
      products,
      numberPages,
      skip,
    },
  };
};

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  // const router = useRouter();
  // if ( !router.query.page)
  //   return (
  //     <Link href="/products" as={`/products`}>
  //       <a {...props}></a>
  //     </Link>
  //   );

  return (
    <Link href="/products/[page]" as={`/products/${item.page}`}>
      <a {...props}></a>
    </Link>
  );
}
