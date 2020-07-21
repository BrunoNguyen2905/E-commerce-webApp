import React from 'react'
import useStyles from './style'
import { PaginationRenderItemParams } from '@material-ui/lab';
import { Card, CardMedia, CardContent, Typography, CardActionArea, CardActions, Button } from '@material-ui/core'
import {GetStaticPaths, GetStaticProps} from "next";
import Loading from "../../components/Loading";
import {gql} from "@apollo/client";
import client from "../apollo";
import {Product} from "../../interfaces";
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { ParsedUrlQuery } from 'querystring';
import {useAllProductsQuery} from "../../generated/graphql";

const ALL_PRODUCTS = gql`
    query allProducts($skip: String!, $take: String!) {
        allProducts(skip: $skip, take: $take) {
            id
            name
        }
    }
`

export interface IProducts {
  products: Product[]
}

export default function Products({ products }: IProducts) {
  const classes = useStyles();

  const router = useRouter();
  if( router.isFallback || !products) {
    return <Loading/>
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content__tittle}>
        <div>POPULAR PRODUCTS</div>
      </div>
      <Pagination
        page={parseInt(router.query.page as string || '1')}
        count={10}
        defaultPage={1}
        renderItem={(item) => (
          <PaginationItem
            component={MaterialUiLink}
            query={router.query}
            item={item}
            {...item}
          />
        )}
      />
      <div className={classes.content__items}>
        {
          products?.map(p=> (
            <Link href="/products/details/[id" as={`/products/details/${p.id}`}>
              <Card className={classes.content__item}>
                <CardActionArea>
                  <CardMedia className={classes.item__media}
                             image="https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg"
                             title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {p?.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Maximum impact cushioning. The brutal, repetitive,
                      downward force of sport can wreak havoc on the body and on performance.
                      Max Air cushioning is specifically engineered to handle these impacts and provide protection.
                      Max Air is big air designed to take a pounding.
                    </Typography>
                    <Typography className={classes.item__price} >PRICE: 60.0 Euro</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add To Cart
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  console.log('day la thu can lay..', ctx?.params?.page );

  const pageQuery = (ctx?.params?.page || 1) as string;

  const take = '3';
  const first = String((parseInt(pageQuery) -1) * (+take))
  const preCalLastItem = (parseInt(pageQuery) - 1) === 0 ? 1 : (parseInt(pageQuery) - 1)
  const last = String(preCalLastItem * (+take))
  const {  data } = await client.query({
    query: ALL_PRODUCTS,
    variables: {
      skip: '0',
      take: take
    }
  })

  const products = Object.keys(data).map((k) => data[k])[0]

  return {
    props: {
      products
    },
  }
}

export const getStaticPaths:GetStaticPaths<{page:string}> = async () => {
  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } }
    ],
    fallback: true
  };
}

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href="/products/[page]"
      as={`/products/${item.page}`}
    >
      <a {...props}></a>
    </Link>
  );
}

