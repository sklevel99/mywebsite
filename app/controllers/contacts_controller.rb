class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request= request
    if @contact.deliver
      flash[:notice] = "Your message has been sent. I'll get back to you soon."
      redirect_to root_path
    else
      flash[:error] = 'Message cannot be sent'
      render :new
    end
  end
end
