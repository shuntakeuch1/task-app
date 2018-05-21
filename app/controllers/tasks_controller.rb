class TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      redirect_to @task
    else
      render 'new'
    end
  end

  def update

  end

  def destroy
  end

  private

    def task_params
      params.require(:task).permit(:user_id,:title,:body,:is_completed)
    end

end
