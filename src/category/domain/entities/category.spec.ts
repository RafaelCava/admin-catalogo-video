import { Category, CategoryProperties } from "./category";
import { omit } from "lodash";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

let props: CategoryProperties = {
  name: "movie",
  description: "one big description",
  created_at: new Date(),
  is_active: false,
};

describe("Category Tests", () => {
  it("Constructor of category", () => {
    const category = new Category(props);
    expect(category.props).toStrictEqual(props);
  });

  it("Building with only the name", () => {
    let newProps = omit(props, "created_at", "is_active", "description");
    const category = new Category(newProps);
    expect(category.props).toMatchObject(newProps);
  });

  it("Building with name and description", () => {
    let newProps = omit(props, "created_at", "is_active");
    const category = new Category(newProps);
    expect(category.props).toStrictEqual(newProps);
  });

  it("Building with name, description and date of creation", () => {
    let newProps = omit(props, "is_active");
    const category = new Category(newProps);
    expect(category.props).toStrictEqual(newProps);
  });

  it("Getter of name field prop", () => {
    const category = new Category({ name: "movie" });
    expect(category.name).toBe("movie");
  });

  it("Getter and setter of description field prop", () => {
    let category = new Category({
      name: "movie",
      description: "some description",
    });
    expect(category.description).toBe("some description");
    category = new Category({ name: "movie" });
    expect(category.description).toBeUndefined();
    category = new Category({ name: "movie" });
    category["description"] = "other description";
    expect(category.description).toBe("other description");
    category["description"] = undefined;
    expect(category.description).toBeNull();
    category["description"] = null;
    expect(category.description).toBeNull();
  });

  it("Getter and setter of is_active field prop", () => {
    let category = new Category({ name: "movie" });
    expect(category.is_active).toBeTruthy();
    category = new Category({ name: "movie", is_active: true });
    expect(category.is_active).toBeTruthy();
    category = new Category({ name: "movie", is_active: false });
    expect(category.is_active).toBeFalsy();
    category["is_active"] = true;
    expect(category.is_active).toBeTruthy();
    category["is_active"] = false;
    expect(category.is_active).toBeFalsy();
  });

  it("Getter of created_at field prop", () => {
    let created_at = new Date();
    let category = new Category({ name: "movie", created_at });
    expect(category.created_at).toBe(created_at);
  });

  it("Id field", () => {
    const data = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: new UniqueEntityId() },
    ];

    data.forEach((item) => {
      let category = new Category(item.props, item.id);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });
});
