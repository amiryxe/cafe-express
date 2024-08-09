import { DataTypes, Model } from 'sequelize'
import sequelize from '../database'

class Customer extends Model {
  public id!: number
  public name!: string
  public code!: string
  public email!: string
  public phone!: string
}

Customer.init(
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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true, // to create cratedAt and updatedAt fields
  }
)

export default Customer
