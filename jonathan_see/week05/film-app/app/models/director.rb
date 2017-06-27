# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :string
#  nationality :string
#  dob         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Director < ApplicationRecord
  has_many :films, dependent: :destroy
end
