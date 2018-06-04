class TasksController < ApplicationController

  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      # すべての結果を返す
      @tasks = Task.where(project_id: @task.project_id)
      # redirect_to controller: "project" ,action:"show", id: task_params.project_id
    # else
    #   render 'new'
    end
  end

  def update

  end

  def destroy
  end

  private

    def task_params
      params.require(:task).permit(:project_id,:title,:body,:is_completed)
    end

end
