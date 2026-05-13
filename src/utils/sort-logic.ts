type SortType =
  | "A ke Z"
  | "Z ke A"
  | "ASC"
  | "DESC";

export const sortData = <
  T
>(
  data: T[],
  type: SortType,
  field: keyof T
): T[] => {

  const sorted = [...data];

  switch (type) {

    case "A ke Z":
      return sorted.sort((a, b) =>
        String(a[field]).localeCompare(
          String(b[field])
        )
      );

    case "Z ke A":
      return sorted.sort((a, b) =>
        String(b[field]).localeCompare(
          String(a[field])
        )
      );

    case "ASC":
      return sorted.sort(
        (a, b) =>
          Number(a[field]) -
          Number(b[field])
      );

    case "DESC":
      return sorted.sort(
        (a, b) =>
          Number(b[field]) -
          Number(a[field])
      );

    default:
      return data;
  }
};