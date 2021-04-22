import React, {
  useEffect,
  useState
} from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { Header } from '../components/Header';
import { ButtonEnviroment } from '../components/ButtonEnviroment';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import api from '../services/api';
import { Load } from '../components/Load';

interface EnviromentProps {
  key: string;
  title: string;
}
interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string
  }
}

export function PlantSelect() {

  const [environments, setEnvironments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantsProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
  const [currentEnvironment, setCurrentEnvironment] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadMore, setLoadMore] = useState(false)
  const [loadedAll, setLoadedAll] = useState(false)

  useEffect(() => {
    fetchEnvironment()
  }, [])
  useEffect(() => {
    fetchPlants()
  }, [])

  async function fetchEnvironment() {
    const { data } = await api.get('plants_environments?_sort=title&_order=asc')
    setEnvironments([
      {
        key: 'all',
        title: 'Todos'
      },
      ...data]
    )
    setLoading(false)
  }
  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&page=${page}&limit=8`)

    if (!data) return setLoading(true)

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadMore(false)

  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return

    setLoadMore(true)
    setPage(oldValue => oldValue + 1)
    fetchPlants()
  }

  function handleEnviromentSelected(key: string) {

    setCurrentEnvironment(key)

    if (key === 'all') return setFilteredPlants(plants)

    const filtered = plants.filter(plant =>
      plant.environments.includes(key)
    )
    setFilteredPlants(filtered)

  }

  if (loading) return <Load />

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
          Em qual ambiente
      </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
      </Text>

        <View>

          <FlatList
            data={environments}
            renderItem={({ item, index }) =>
              <ButtonEnviroment
                title={item.title}
                active={item.key === currentEnvironment}
                onPress={() => handleEnviromentSelected(item.key)}
              />
            }
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
          />

        </View>

      </View>

      <View style={styles.plants}>
        <FlatList
          data={plants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadMore ?
              <ActivityIndicator color={colors.green} />
              : <></>
          }
        />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: getStatusBarHeight()
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20
  },
  header: {
    paddingHorizontal: 30
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingHorizontal: 5,
    marginVertical: 32
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})