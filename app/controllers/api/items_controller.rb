class Api::ItemsController < ApplicationController
  before_action :set_department

  def index
    render json: @department.items
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: {errors: planet.errors, status: 422}
    end
  end

  def show
  render json: @department.items.find(params[:id])
  end

  def destroy
  render json: @department.items.find(params[:id]).destroy
  end

private

def set_department
  @department = Department.find(params[:department_id])
end


def item_params
  params.require(:item).permit(:name, :price, :description, :department_id)
end



end
