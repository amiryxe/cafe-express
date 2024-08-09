import { DataTypes, Model } from 'sequelize'
import sequelize from '../database'

class Category extends Model {
  public id!: number
  public name!: string
  public imageUrl!: string
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    timestamps: true,
  }
)

export default Category
