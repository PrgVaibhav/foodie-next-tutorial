import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import MealsLoading from "./loading";

async function Meal() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meal />
        </Suspense>
      </main>
    </>
  );
}
