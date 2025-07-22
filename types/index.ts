type RECORD_TYPE = {
  id?: number;
  drinkType: string;
  amount: number;
  date: string;
  timestamp?: Date | string;
};

type STATISTICS_TYPE = {
  totalRecords: number;
  totalAmount: number;
  averageAmount: number;
  drinkTypeBreakdown: { [key: string]: number };
  dailyBreakdown: { [key: string]: number };
};

type INGREDIENT_TYPE = {
  ingredient: string;
  measure: string;
}[];

export { RECORD_TYPE, STATISTICS_TYPE, INGREDIENT_TYPE };
