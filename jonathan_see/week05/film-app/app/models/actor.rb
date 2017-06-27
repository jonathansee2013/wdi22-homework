# == Schema Information
#
# Table name: actors
#
#  id          :integer          not null, primary key
#  name        :string
#  nationality :string
#  dob         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Actor < ApplicationRecord
  has_and_belongs_to_many :films, dependent: :destroy
end
