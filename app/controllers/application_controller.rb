class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

 def current_users_around
    @users_around = current_user.nearbys(10)
    @current_users_around = @users_around.where(updated_at: (10.day.ago..Time.now))
    if @current_users_around.length == 0
      @current_users_around = User.order('created_at ASC').limit(10)
    end
    return @current_users_around
  end

  helper_method :current_users_around

  private
  def power(num, pow)
    num ** pow
  end

  def distance(lat1, long1, lat2, long2)
    dtor = Math::PI / 180
    r = 6378.14

    rlat1  = lat1  * dtor
    rlong1 = long1 * dtor
    rlat2  = lat2  * dtor
    rlong2 = long2 * dtor

    dlon = rlong1 - rlong2
    dlat = rlat1  - rlat2

    a = power(Math::sin(dlat/2), 2) + Math::cos(rlat1) * Math::cos(rlat2) * power(Math::sin(dlon/2), 2)
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))
    d = r * c

    return d
  end

end
